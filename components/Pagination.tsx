import { PostInfo } from "@/lib/data";
import Link from "next/link";

// text-overflow: ellipsis;
// overflow: hidden;
// text-wrap: nowrap;

interface PaginationProps {
  next?: PostInfo;
  prev?: PostInfo;
}
export default function Pagination({ prev, next }: PaginationProps) {
  return (
    <table className="w-full">
      <tbody>
        <tr>
          {prev && (
            <td className="w-1">
              <Link href={prev.url}>{`<`}</Link>
            </td>
          )}
          <td className="text-left w-1/2">
            {prev && <Link href={prev.url}>{prev.title}</Link>}
          </td>
          <td className="text-right w-1/2">
            {next && <Link href={next.url}>{next.title}</Link>}
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
