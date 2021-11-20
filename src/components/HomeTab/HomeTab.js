import React, { useState, useEffect, useMemo } from "react";
import { useSortBy, useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import ModalAddTransaction from "../ModalAddTransaction";

import "./homeTab.scss";

const HomeTab = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  useEffect(() => {}, [data]);

  return (
    <>
      {/* let className = 'green';
      if(data.type === '-'){
        
      } */}
      <div className="HomeTab">
        <table className="HomeTab-secondary" {...getTableProps()}>
          <thead className="HomeTab__header">
            {headerGroups.map((headerGroup) => (
              <tr
                key={data.transactionId}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    key={data.transactionId}
                    className="HomeTab-column-header"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <AiOutlineDown />
                        ) : (
                          <AiOutlineUp />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <>
                  <tr key={data.transactionId} {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          key={data.transactionId}
                          className="HomeTab-column"
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>

        <table className="HomeTab-mobile" {...getTableProps()}>
          <tbody {...getTableBodyProps()}>
            {rows.map((_row, i) => {
              return (
                <>
                  <tr>
                    <td
                      key={data.transactionId}
                      className="HomeTab-column-header"
                    >
                      Дата
                    </td>
                    <td key={data.transactionId} className="HomeTab-column">
                      {data[i].date}
                    </td>
                  </tr>
                  <tr>
                    <td
                      key={data.transactionId}
                      className="HomeTab-column-header"
                    >
                      Тип
                    </td>
                    <td key={data.transactionId} className="HomeTab-column">
                      {data[i].type}
                    </td>
                  </tr>
                  <tr>
                    <td
                      key={data.transactionId}
                      className="HomeTab-column-header"
                    >
                      Коментарий
                    </td>
                    <td key={data.transactionId} className="HomeTab-column">
                      {data[i].comment}
                    </td>
                  </tr>
                  <tr>
                    <td
                      key={data.transactionId}
                      className="HomeTab-column-header"
                    >
                      Категория
                    </td>
                    <td key={data.transactionId} className="HomeTab-column">
                      {data[i].category}
                    </td>
                  </tr>
                  <tr>
                    <td
                      key={data.transactionId}
                      className="HomeTab-column-header"
                    >
                      Сумма
                    </td>
                    <td key={data.transactionId} className="HomeTab-column">
                      {data[i].sum}
                    </td>
                  </tr>
                  <tr>
                    <td
                      key={data.transactionId}
                      className="HomeTab-column-header"
                    >
                      Баланс
                    </td>
                    <td key={data.transactionId} className="HomeTab-column">
                      {data[i].balance}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <ModalAddTransaction />
    </>
  );
};

export default HomeTab;
