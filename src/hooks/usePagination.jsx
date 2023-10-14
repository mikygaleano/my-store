import { useState } from "react";

export const usePagination = (data) => {

    const productsPerPage = 5;
    const totalPages = Math.ceil(data.length / productsPerPage);

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    const next = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };

    const prev = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    return {
        next,
        prev,
        currentProducts,
        currentPage,
        totalPages
    }
}