import { format } from "date-fns";

interface DateStringProps {
  date: Date;
}

export default function DateString({ date }: DateStringProps) {
  return (
    <time dateTime={date.toISOString()}>{format(date, "LLLL	d, yyyy")}</time>
  );
}
