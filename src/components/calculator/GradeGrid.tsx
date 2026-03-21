import { Regulation, REGULATION_GRADES } from '@/data/regulations';

interface GradeGridProps {
  selectedGrade: string;
  onSelectGrade: (grade: string) => void;
  regulation: Regulation;
}

const GradeGrid = ({ selectedGrade, onSelectGrade, regulation }: GradeGridProps) => {
  const currentGrades = Object.keys(REGULATION_GRADES[regulation]);

  return (
    <div className="grid grid-cols-4 gap-2">
      {currentGrades.map((grade) => (
        <button
          key={grade}
          type="button"
          onClick={() => onSelectGrade(grade)}
          className={`h-12 rounded-xl font-bold text-lg transition-all
                      ${selectedGrade === grade
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-105 shadow-lg'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
        >
          {grade}
        </button>
      ))}
    </div>
  );
};

export default GradeGrid;
