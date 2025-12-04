"use client";

import { FC, useEffect, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../Icon/Icon";
import ErrorText from "../ErrorText/ErrorText";

type Size = "sm" | "md" | "lg";

type Props = {
  value?: string | null; // "YYYY-MM-DD"
  onChange?: (value: string | null) => void;

  label?: string;
  placeholder?: string;
  size?: Size;
  disabled?: boolean;
  errorText?: string | null;
  helperText?: string;
  className?: string;
  wrapperClassName?: string;
  dropdownClassName?: string;

  minDate?: Date;
  maxDate?: Date;
};

const sizeStyles: Record<
  Size,
  { height: string; px: string; text: string; labelMb: string }
> = {
  sm: { height: "h-10", px: "px-2", text: "text-sm", labelMb: "mb-1" },
  md: { height: "h-12", px: "px-3", text: "text-base", labelMb: "mb-1.5" },
  lg: { height: "h-14", px: "px-4", text: "text-lg", labelMb: "mb-2" },
};

const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const monthsRu = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const startOfDay = (d: Date) => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

const isSameDay = (a: Date | null, b: Date | null) => {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};

const isBeforeDay = (a: Date, b: Date) =>
  startOfDay(a).getTime() < startOfDay(b).getTime();

const isAfterDay = (a: Date, b: Date) =>
  startOfDay(a).getTime() > startOfDay(b).getTime();

const parseIso = (s?: string | null): Date | null => {
  if (!s) return null;
  const m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return Number.isNaN(d.getTime()) ? null : d;
};

const toIso = (d: Date | null): string | null => {
  if (!d) return null;
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const formatRu = (d: Date | null): string => {
  if (!d) return "";
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
};

// матрица месяца, Пн — первый день
const getMonthMatrix = (year: number, month: number) => {
  const firstOfMonth = new Date(year, month, 1);
  const firstWeekDay = (firstOfMonth.getDay() + 6) % 7; // 0..6, 0 = Mon
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weeks: (Date | null)[][] = [];
  let currentDay = 1 - firstWeekDay;

  for (let w = 0; w < 6; w++) {
    const week: (Date | null)[] = [];
    for (let i = 0; i < 7; i++) {
      if (currentDay < 1 || currentDay > daysInMonth) {
        week.push(null);
      } else {
        week.push(new Date(year, month, currentDay));
      }
      currentDay++;
    }
    weeks.push(week);
  }

  return weeks;
};

const DatePicker: FC<Props> = ({
  value,
  onChange,
  label,
  placeholder = "Выберите дату",
  size = "md",
  disabled,
  errorText,
  helperText,
  className,
  wrapperClassName,
  dropdownClassName,
  minDate,
  maxDate,
}) => {
  const sz = sizeStyles[size];
  const selectedDate = useMemo(() => parseIso(value), [value]);

  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(
    selectedDate?.getFullYear() ?? new Date().getFullYear()
  );
  const [viewMonth, setViewMonth] = useState(
    selectedDate?.getMonth() ?? new Date().getMonth()
  );

  const today = useMemo(() => startOfDay(new Date()), []);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  // если дата изменилась извне — пересинхроним календарь
  useEffect(() => {
    if (!selectedDate) return;
    setViewYear(selectedDate.getFullYear());
    setViewMonth(selectedDate.getMonth());
  }, [selectedDate?.getTime()]);

  const matrix = useMemo(
    () => getMonthMatrix(viewYear, viewMonth),
    [viewYear, viewMonth]
  );

  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const handleSelectDate = (d: Date) => {
    if (disabled) return;

    if (minDate && isBeforeDay(d, minDate)) return;
    if (maxDate && isAfterDay(d, maxDate)) return;

    const iso = toIso(d);
    onChange?.(iso);
    setOpen(false);
  };

  const goPrevMonth = () => {
    let m = viewMonth - 1;
    let y = viewYear;
    if (m < 0) {
      m = 11;
      y--;
    }
    setViewMonth(m);
    setViewYear(y);
  };

  const goNextMonth = () => {
    let m = viewMonth + 1;
    let y = viewYear;
    if (m > 11) {
      m = 0;
      y++;
    }
    setViewMonth(m);
    setViewYear(y);
  };

  const baseInput =
    `${sz.height} w-full ${sz.px} ${sz.text} ` +
    "rounded-xl border bg-white text-black " +
    "flex items-center justify-between " +
    "transition-colors duration-150";

  const normalBorder =
    "border-gray hover:border-blue-500 focus-within:border-blue-500";
  const errorBorder = "border-danger focus-within:border-danger";
  const disabledStyles =
    "bg-gray-100 text-gray-500 cursor-not-allowed hover:border-gray";

  const displayValue = formatRu(selectedDate);
  const hasError = !!errorText;

  return (
    <div ref={rootRef} className={twMerge("relative w-full", wrapperClassName)}>
      {label && (
        <div
          className={twMerge("flex items-center justify-between", sz.labelMb)}
        >
          <span className="text-sm md:text-base font-medium text-gray-900">
            {label}
          </span>
        </div>
      )}

      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
        className={twMerge(
          baseInput,
          hasError ? errorBorder : normalBorder,
          disabled && disabledStyles,
          className
        )}
      >
        <span
          className={twMerge(
            "truncate text-left",
            !displayValue && "text-dark-gray"
          )}
        >
          {displayValue || placeholder}
        </span>

        <Icon
          name="calendar"
          className={twMerge(
            "w-5 h-5 ml-3 flex-shrink-0",
            disabled ? "text-gray-400" : "text-gray-500"
          )}
        />
      </button>

      <div className="mt-1 min-h-[18px]">
        <AnimatePresence>
          {hasError && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="w-full flex justify-center"
            >
              <ErrorText
                error={
                  {
                    type: "manual",
                    message: errorText || "",
                  } as any
                }
              />
            </motion.div>
          )}
        </AnimatePresence>

        {!hasError && helperText && (
          <div className="text-xs text-gray-500 text-center">{helperText}</div>
        )}
      </div>

      {/* попап-календарь */}
      <AnimatePresence>
        {open && hasMounted && !disabled && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className={twMerge(
              "absolute z-50 mt-2 w-full rounded-2xl border border-gray-200 bg-white shadow-lg",
              "p-3 md:p-4",
              dropdownClassName
            )}
          >
            <div className="flex items-center justify-between mb-3">
              <button
                type="button"
                onClick={goPrevMonth}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
              >
                <Icon name="chevron-left" className="w-4 h-4" />
              </button>

              <div className="text-sm font-medium text-gray-900">
                {monthsRu[viewMonth]} {viewYear}
              </div>

              <button
                type="button"
                onClick={goNextMonth}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
              >
                <Icon name="chevron-right" className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-[11px] md:text-xs text-gray-500 mb-1">
              {weekdays.map((d) => (
                <div key={d} className="text-center">
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-sm">
              {matrix.map((week, wi) =>
                week.map((day, di) => {
                  if (!day) {
                    return (
                      <div
                        key={`${wi}-${di}`}
                        className="h-8 md:h-9 rounded-lg"
                      />
                    );
                  }

                  const disabledByMin = minDate && isBeforeDay(day, minDate);
                  const disabledByMax = maxDate && isAfterDay(day, maxDate);
                  const isDisabledCell = disabledByMin || disabledByMax;

                  const isSelected = isSameDay(day, selectedDate);
                  const isToday = isSameDay(day, today);
                  const inCurrentMonth =
                    day.getMonth() === viewMonth &&
                    day.getFullYear() === viewYear;

                  return (
                    <button
                      key={`${wi}-${di}-${day.toISOString()}`}
                      type="button"
                      onClick={() => handleSelectDate(day)}
                      disabled={isDisabledCell}
                      className={twMerge(
                        "h-8 md:h-9 w-full rounded-lg flex items-center justify-center",
                        "text-xs md:text-sm transition-colors duration-120",
                        inCurrentMonth ? "text-gray-800" : "text-gray-400",
                        isToday && !isSelected && "border border-blue-200",
                        isSelected &&
                          "bg-blue-600 text-white hover:bg-blue-600",
                        !isSelected && !isDisabledCell && "hover:bg-gray-100",
                        isDisabledCell &&
                          "text-gray-300 cursor-not-allowed hover:bg-transparent"
                      )}
                    >
                      {day.getDate()}
                    </button>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DatePicker;
