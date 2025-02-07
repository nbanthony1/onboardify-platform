
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { departments } from "@/data/departments";
import { courses } from "@/data/courses";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface AnalyticsDashboardProps {
  completedModules: { [key: string]: boolean };
}

// Toggle this constant to false when going live
const USE_PLACEHOLDER_DATA = true;

const getPlaceholderData = () => ({
  completedModules: {
    "Company Overview": true,
    "History and Evolution": true,
    "Mission and Vision": true,
    "Technology Overview": true,
    "Benefits of Electromagnetic Deterrence": true,
    "Industry Applications": true,
    "Customer Avatars": true,
    "Lead Generation and Qualification": true,
    "Sales Presentation and Demonstration": true,
    "Collaboration with Marketing": true,
    "CRM Training": true,
  }
});

const AnalyticsDashboard = ({ completedModules: actualCompletedModules }: AnalyticsDashboardProps) => {
  // Use placeholder or actual data based on the toggle
  const completedModules = USE_PLACEHOLDER_DATA ? getPlaceholderData().completedModules : actualCompletedModules;
  
  // Calculate department-specific completion rates
  const departmentStats = departments.map(dept => {
    const deptCourses = courses.filter(course => course.department === dept.id);
    const deptModulesTotal = deptCourses.reduce((acc, course) => {
      return acc + (course.modules?.length || 0);
    }, 0);

    const deptCompletedModules = deptCourses.reduce((acc, course) => {
      return acc + (course.modules?.filter(module => {
        const moduleTitle = typeof module === 'string' ? module : module.title;
        return completedModules[moduleTitle];
      })?.length || 0);
    }, 0);

    const progress = deptModulesTotal > 0 
      ? Math.round((deptCompletedModules / deptModulesTotal) * 100) 
      : 0;

    return {
      name: dept.name,
      value: progress,
      color: getColorForDepartment(dept.id),
    };
  });

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Organizational Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Completion Rate</span>
              <span>{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-2" />
            <p className="text-sm text-muted-foreground">
              {completedCount} of {allModules} modules completed
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Department Progress</CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentStats}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={45}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {departmentStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => `${value}%`}
                  labelFormatter={(index) => departmentStats[index as number].name}
                />
                <Legend 
                  verticalAlign="bottom" 
                  align="center"
                  layout="horizontal"
                  iconSize={8}
                  iconType="circle"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Helper function to get a consistent color for each department
const getColorForDepartment = (deptId: string): string => {
  const colors: { [key: string]: string } = {
    sales: '#22c55e',      // Green
    operations: '#3b82f6',  // Blue
    hr: '#f43f5e',         // Red
    engineering: '#8b5cf6', // Purple
    marketing: '#f97316',   // Orange
    product: '#0ea5e9',    // Sky Blue
  };
  return colors[deptId] || '#64748b'; // Default gray
};

export default AnalyticsDashboard;
