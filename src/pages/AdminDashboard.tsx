
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { departments } from "@/data/courses";

interface UserProgress {
  id: string;
  first_name: string;
  last_name: string;
  department: string;
  completed_modules: number;
  total_modules: number;
  progress: number;
}

const AdminDashboard = () => {
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        // Fetch all users and their progress
        const { data: profiles, error: profilesError } = await supabase
          .from("profiles")
          .select("*")
          .eq("role", "user");

        if (profilesError) throw profilesError;

        // Fetch module progress for all users
        const { data: progress, error: progressError } = await supabase
          .from("module_progress")
          .select("*");

        if (progressError) throw progressError;

        // Calculate progress for each user
        const userProgressData = profiles.map((profile: any) => {
          const userModules = progress.filter((p: any) => p.user_id === profile.id);
          const completedModules = userModules.length;
          
          return {
            id: profile.id,
            first_name: profile.first_name,
            last_name: profile.last_name,
            department: profile.department,
            completed_modules: completedModules,
            total_modules: 0, // This will be set based on department
            progress: 0, // This will be calculated
          };
        });

        setUserProgress(userProgressData);
      } catch (error: any) {
        console.error("Error fetching user progress:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProgress();
  }, []);

  const filteredProgress = userProgress.filter(
    (user) => selectedDepartment === "all" || user.department === selectedDepartment
  );

  return (
    <div className="container mx-auto py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor employee progress across departments
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Team Progress</CardTitle>
              <Select
                value={selectedDepartment}
                onValueChange={setSelectedDepartment}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map((dept) => (
                    <SelectItem key={dept.id} value={dept.id}>
                      {dept.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {loading ? (
                <p>Loading progress data...</p>
              ) : filteredProgress.length > 0 ? (
                filteredProgress.map((user) => (
                  <div key={user.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">
                        {user.first_name} {user.last_name}
                      </p>
                      <span className="text-sm text-muted-foreground">
                        {user.completed_modules} / {user.total_modules} modules
                      </span>
                    </div>
                    <Progress value={user.progress} />
                  </div>
                ))
              ) : (
                <p>No users found in this department.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
