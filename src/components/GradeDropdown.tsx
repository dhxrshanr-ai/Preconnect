import { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

const VALID_GRADES = new Set(['O', 'A+', 'A', 'B+', 'B', 'C', 'RA']);

export function GradeDropdown({ value, onChange, id = 'default', onOpenChange }: { 
  value?: string, 
  onChange: (v: string) => void, 
  dropUp?: boolean, 
  id?: string,
  onOpenChange?: (open: boolean) => void
}) {
  const [inputVal, setInputVal] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync external value into local input state
  useEffect(() => {
    setInputVal(value || '');
  }, [value]);

  // Notify parent when focus state changes
  useEffect(() => {
    onOpenChange?.(isFocused);
  }, [isFocused, onOpenChange]);

  const commit = useCallback((raw: string) => {
    const upper = raw.trim().toUpperCase();
    if (VALID_GRADES.has(upper)) {
      onChange(upper);
      setInputVal(upper);
    } else if (upper === '') {
      onChange('');
      setInputVal('');
    } else {
      // Revert to last valid value
      setInputVal(value || '');
    }
  }, [onChange, value]);

  const isValid = VALID_GRADES.has(inputVal.trim().toUpperCase());
  const isEmpty = inputVal.trim() === '';
  const hasContent = inputVal.length > 0;

  return (
    <div className="relative shrink-0">
      <input
        ref={inputRef}
        id={`grade-input-${id}`}
        type="text"
        maxLength={2}
        value={inputVal}
        placeholder="GRADE"
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          commit(inputVal);
        }}
        onChange={(e) => {
          const upper = e.target.value.toUpperCase();
          setInputVal(upper);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            commit(inputVal);
            inputRef.current?.blur();
          }
          if (e.key === 'Escape') {
            setInputVal(value || '');
            inputRef.current?.blur();
          }
        }}
        className={cn(
          "h-12 w-24 sm:w-28 px-3 rounded-2xl border-2 text-center font-space-grotesque font-black text-sm tracking-widest uppercase outline-none transition-all duration-300",
          isEmpty && !isFocused
            ? "bg-gray-50 border-gray-200 text-gray-400 hover:border-emerald-300 hover:text-emerald-500 placeholder:text-gray-300 shadow-inner"
            : isFocused && !isValid && hasContent
            ? "bg-rose-50 border-rose-400 text-rose-500 ring-4 ring-rose-50"
            : isFocused
            ? "bg-emerald-50 border-emerald-500 text-gray-900 ring-4 ring-emerald-50 scale-[1.03] shadow-lg shadow-emerald-500/10"
            : isValid
            ? "bg-emerald-600 border-emerald-600 text-white shadow-[0_8px_20px_rgba(5,150,105,0.3)]"
            : "bg-gray-50 border-gray-200 text-gray-400"
        )}
      />
    </div>
  );
}
