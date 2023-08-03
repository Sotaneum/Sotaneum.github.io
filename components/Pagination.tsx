import { PostInfo } from "@/lib/data";
import Link from "next/link";

interface PaginationProps {
  next?: PostInfo;
  prev?: PostInfo;
}
export default function Pagination({ prev, next }: PaginationProps) {
  return (
    <table className="w-full mt-4 mb-4 border-t-amber-50">
      <tbody>
        <tr>
          {prev && (
            <td className="w-1">
              <Link href={prev.url}>{`<`}</Link>
            </td>
          )}
          <td className="text-left w-1/2">
            {prev && (
              <Link
                href={prev.url}
                className="highlight highlight-variant-10 highlight-rose-300 highlight-spread-sm"
              >
                {prev.title}
              </Link>
            )}
          </td>
          <td className="text-right w-1/2">
            {next && (
              <Link
                href={next.url}
                className="highlight highlight-variant-10 highlight-rose-300 highlight-spread-sm"
              >
                {next.title}
              </Link>
            )}
          </td>
          {next && (
            <td className="w-1">
              <Link href={next.url}>{`>`}</Link>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
}
