export const MonthMethods = (month: number, year: number): number => {
    if (month < 1 || month > 12) {
        throw new Error("El número del mes debe estar entre 1 y 12.");
    }
    return new Date(year, month, 0).getDate();
};

const monthNames = [
    'enero', 'febrero', 'marzo',
    'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre',
    'octubre', 'noviembre', 'diciembre'
];

export const MonthName = (month: number): string => {
    if (month < 1 || month > 12) {
        throw new Error("El número del mes debe estar entre 1 y 12.");
    }
    return monthNames[month - 1];
};

export const PaddingDays = (month: number, year: number): number => {
        const firstDayOfMonth = new Date(year, month - 1, 1);
        return firstDayOfMonth.getDay();

    }
