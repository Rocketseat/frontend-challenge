import Product from "@/types/product";

export default function pagination(
  data: Product[] | undefined,
  page: number,
  skip: number
) {
  if (!data) return;
  const startIndex = (page - 1) * skip;
  const endIndex = startIndex + skip;
  const items = data.slice(startIndex, endIndex);
  return items;
}
