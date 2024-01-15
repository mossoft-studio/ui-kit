import { Row } from "@/redux/app/app.api";
import { SelectOptions } from "@/types";
import moment from "moment";

export const rowsTranfom = (rows: Row[]) => {
  let s: any = null;

  const arr = rows
    ?.map((row: any) => row.number)
    ?.sort((a, b) => a - b)
    ?.reduce((p: string[], c: any, i: number, arr) => {
      if (!s) s = c;
      if (c + 1 !== arr[i + 1]) {
        p.push(s === c ? s : `${s}-${c}`);
        s = null;
      }

      return p;
    }, []);

  return arr.join(", ");
};

export const numberWithSpaces = (value: number) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export const createOptionsFromTranslations = <T extends string>(
  translations: {
    [key in T]: string;
  },
  keyToExclude?: T
): SelectOptions[] =>
  translations &&
  (Object.keys(translations) as T[]).map((key) => ({
    label: translations[key],
    value: key,
  }));

export const numbersRounding = (value: number) =>
  value > 1000000 ? `${Math.floor(value / 1000000)} млн` : value;

export const transformTimeDuration = (value: string) => {
  const duration = moment.duration(value);
  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();

  if (value !== null && (minutes !== 0 || hours !== 0)) {
    if (hours === 0) {
      return `${minutes} мин.`;
    } else if (minutes === 0) {
      return `${hours} ч.`;
    } else {
      return `${hours} ч. ${minutes} мин.`;
    }
  } else {
    return "-";
  }
};

export const lowestCommonDenominator = (a: number, b: number): number => {
  return Math.floor(a / b);
};

export const mushroomSizeTransorm = (
  data: { name: string; id: number }[]
): string => {
  return `${data
    .find((item) => item)
    ?.name.split("-")
    .find((item) => item)}-${
    data[data.length - 1].name.split("-")[
      data[data.length - 1].name.split("-").length - 1
    ]
  }`;
};
