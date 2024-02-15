import useProductsList from "@/hook/useProductsList";

export default function ProductsList() {
  const { data } = useProductsList();
  console.log(data);
  return <div>{}</div>;
}
