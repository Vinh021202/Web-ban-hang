export const fomater = (number) => {
    return new Intl.NumberFormat("vi-Vn", {
        style: "currency",
        currency: "VND",
    }).format(number);
};