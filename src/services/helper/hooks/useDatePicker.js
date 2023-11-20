import React, { useState } from 'react';

const useDatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const openDatePicker = () => {
    showDatePicker();
  };

  return {
    selectedDate,
    openDatePicker,
    isDatePickerVisible,
    hideDatePicker,
    handleConfirm,
  };
};

export default useDatePicker;
