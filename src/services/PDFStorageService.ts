
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export interface UploadResult {
  success: boolean;
  url?: string;
  error?: any;
}

export class PDFStorageService {
  
  /**
   * Save PDF to local storage as a fallback
   */
  static saveToLocalStorage(storageKey: string, url: string): void {
    localStorage.setItem(storageKey, url);
  }
  
  /**
   * Get PDF from local storage
   */
  static getFromLocalStorage(storageKey: string): string | null {
    return localStorage.getItem(storageKey);
  }
  
  /**
   * Remove PDF from local storage
   */
  static removeFromLocalStorage(storageKey: string): void {
    localStorage.removeItem(storageKey);
  }
  
  /**
   * Upload PDF to Supabase storage
   */
  static async uploadToSupabase(file: File, targetPath: string): Promise<UploadResult> {
    try {
      // Remove leading slash if present
      const cleanPath = targetPath.startsWith('/') ? targetPath.substring(1) : targetPath;
      
      // Ensure the filename is unique by adding a timestamp
      const timestamp = Date.now();
      const filename = cleanPath.split('/').pop() || `pdf_${timestamp}.pdf`;
      const folderPath = cleanPath.split('/').slice(0, -1).join('/');
      const fullPath = `${folderPath}/${filename.replace('.pdf', '')}_${timestamp}.pdf`;
      
      console.log(`Uploading to Supabase: ${fullPath}`);
      
      // Upload to Supabase storage
      const { data, error } = await supabase.storage
        .from('course_materials')
        .upload(fullPath, file, {
          cacheControl: '31536000', // Cache for 1 year
          upsert: true,
          contentType: 'application/pdf'
        });
        
      if (error) {
        console.error("Supabase upload error:", error);
        toast({
          title: "Upload Error",
          description: "Failed to upload PDF to permanent storage. Using local storage instead.",
          variant: "destructive"
        });
        return { success: false, error };
      }
      
      console.log("Supabase upload successful:", data);
      
      // Get the public URL
      const { data: publicUrlData } = await supabase.storage
        .from('course_materials')
        .getPublicUrl(fullPath);
        
      if (publicUrlData?.publicUrl) {
        console.log("Permanent storage URL:", publicUrlData.publicUrl);
        return { success: true, url: publicUrlData.publicUrl };
      }
      
      return { success: false, error: "Failed to get public URL" };
    } catch (error) {
      console.error("Error uploading to Supabase:", error);
      return { success: false, error };
    }
  }
}
