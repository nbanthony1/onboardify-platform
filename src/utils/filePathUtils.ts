
export const generateVideoPath = (courseId: number, moduleId: string) => {
  return `course_${courseId}_module_${moduleId}_${Date.now()}.mp4`;
};

export const generatePdfPath = (courseTitle: string, moduleId: string, suffix = '') => {
  const timestamp = Date.now();
  const formattedTitle = courseTitle.replace(/^\d+\.\s/, '').toLowerCase().replace(/\s+/g, '-');
  return `pdfs/${formattedTitle}/module-${moduleId}${suffix ? `-${suffix}` : ''}-${timestamp}.pdf`;
};
