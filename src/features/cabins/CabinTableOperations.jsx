import TableOperations from "../../ui/TableOperations"
import Filter from "../../ui/Filter"
import SortyBy from "../../ui/SortBy"

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortyBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort descending by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (low to high)" },
          { value: "regularPrice-desc", label: "Sort by price (high to low)" },
          {
            value: "maxCapacity-asc",
            label: "Sort by max capacity (low to high)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by max capacity (high to low)",
          },
        ]}
      />
    </TableOperations>
  )
}
