import React from 'react';
import type { UIStrings } from '../data/translations';
import type { ServiceCategory } from '../types';
import { 
  FileCheck, 
  Landmark, 
  GraduationCap, 
  HeartHandshake, 
  Sprout, 
  Layers
} from 'lucide-react';

interface CategoryGridProps {
  ui: UIStrings;
  selectedCategory: ServiceCategory;
  onSelectCategory: (cat: ServiceCategory) => void;
  categoryCounts: Record<ServiceCategory, number>;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  ui,
  selectedCategory,
  onSelectCategory,
  categoryCounts
}) => {
  const categories: Array<{
    id: ServiceCategory;
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
  }> = [
    {
      id: 'all',
      name: ui.allCategories,
      icon: Layers,
      accentColor: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      id: 'certificates',
      name: ui.catCertificates,
      icon: FileCheck,
      accentColor: 'text-blue-700 bg-blue-50 border-blue-200'
    },
    {
      id: 'revenue',
      name: ui.catRevenue,
      icon: Landmark,
      accentColor: 'text-amber-700 bg-amber-50 border-amber-200'
    },
    {
      id: 'education',
      name: ui.catEducation,
      icon: GraduationCap,
      accentColor: 'text-purple-700 bg-purple-50 border-purple-200'
    },
    {
      id: 'welfare',
      name: ui.catWelfare,
      icon: HeartHandshake,
      accentColor: 'text-rose-700 bg-rose-50 border-rose-200'
    },
    {
      id: 'agriculture',
      name: ui.catAgriculture,
      icon: Sprout,
      accentColor: 'text-green-700 bg-green-50 border-green-200'
    }
  ];

  return (
    <section className="py-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              {ui.categoriesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              {ui.categoriesSubtitle}
            </p>
          </div>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => onSelectCategory('all')}
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline self-start sm:self-auto"
            >
              {ui.allCategories} ({categoryCounts['all'] || 0})
            </button>
          )}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count = categoryCounts[cat.id] || 0;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-emerald-600/40 ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-md ring-2 ring-emerald-600/20'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800 shadow-2xs hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-colors ${
                    isSelected ? 'bg-white/20 text-white border-white/20' : cat.accentColor
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-emerald-900 text-emerald-100' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </div>

                <div>
                  <h3 className={`text-xs sm:text-sm font-semibold line-clamp-2 ${
                    isSelected ? 'text-white' : 'text-slate-900 group-hover:text-emerald-800'
                  }`}>
                    {cat.name}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
