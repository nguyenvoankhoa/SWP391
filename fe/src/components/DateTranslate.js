import { useState } from 'react';

const useDateTranslate = () => {
    const weekdays = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const englishWeekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const translateWeekdays = (weekdays) => {
        const dayIndex = englishWeekdays.indexOf(weekdays);
        return weekdays[dayIndex];
    };
    
    return {translateWeekdays};
}

export default useDateTranslate;