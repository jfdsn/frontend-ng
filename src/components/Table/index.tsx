import { Tb, Th, Td, Tr } from "./style";
import { useTable } from "react-table";

type TableType = {
    columns: any;
    data: any;
}

export const Table = ({ columns, data }: TableType) => {
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({columns, data});

    return (
        <Tb {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
                ))}
                </Tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                <Tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                    return <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>;
                    })}
                </Tr>
                );
            })}
            </tbody>
        </Tb>
    )

};