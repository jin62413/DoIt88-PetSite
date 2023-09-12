import debounce from '@/utils/debounce';
import { useEffect, useCallback, useRef } from 'react';
import useBirthDateStore from '@/store/useBirthDateStore';

function BirthDate2() {
  const {
    year,
    month,
    day,
    isValid,
    errorMessage,
    setYear,
    setMonth,
    setDay,
    setIsValid,
    setErrorMessage,
  } = useBirthDateStore();

  const handleInputChange = (e) => {
    let inputVal = e.target.value.replace(/\D/g, ''); // Remove all non-digits
    if (inputVal.length > e.target.maxLength) {
      inputVal = inputVal.slice(0, e.target.maxLength);
    }

    switch (e.target.name) {
      case 'year':
        setYear(inputVal);
        if (inputVal.length === e.target.maxLength) {
          monthInputRef.current.focus(); // Move focus to the month input element
        }
        break;
      case 'month':
        setMonth(inputVal);
        if (inputVal.length === e.target.maxLength) {
          dayInputRef.current.focus(); // Move focus to the day input element
        }
        break;
      case 'day':
        setDay(inputVal);
        break;
      default:
        break;
    }
  };
  const validateDate = useCallback(
    debounce(() => {
      const input = `${year}/${month}/${day}`;

      // Check if the input is empty or in the format "//"
      if (input === '//') {
        setIsValid(true);
        setErrorMessage('');
        return;
      }

      const regex = /^\d{4}\/\d{2}\/\d{2}$/; // YYYY/MM/DD format validation

      // Check if the input matches the required format
      if (!regex.test(input)) {
        setIsValid(false);
        setErrorMessage('YYYY / MM / DD 형식으로 입력해주세요.');
        return;
      }

      const inputYear = parseInt(input.substring(0, 4));
      const inputMonth = parseInt(input.substring(5, 7));
      const inputDay = parseInt(input.substring(8));

      // Check if the month and day values are within valid ranges
      if (inputMonth < 1 || inputMonth > 12 || inputDay < 1 || inputDay > 31) {
        setIsValid(false);
        setErrorMessage('월은 숫자 1-12까지, 일은 숫자 1~31까지만 가능합니다.');
        return;
      }

      let currentDate = new Date();

      // Ignore the time component by setting it to midnight
      currentDate.setHours(0, 0, 0, 0);

      // Compare the entered date with today's date to check validity
      if (new Date(inputYear, inputMonth - 1, inputDay) > currentDate) {
        setIsValid(false);
        setErrorMessage('로또번호를 가지고 미래에서 온 당신!');
        return;
      }

      // Calculate the difference between entered year and current year to check validity
      if (currentDate.getFullYear() - inputYear > 150) {
        setIsValid(false);
        setErrorMessage('연도를 잘못 입력하셨거나 150세 이상이시군요.');
        return;
      }

      setIsValid(true);
    }, [year, month, day]),
  );

  // Refs for the input elements
  const yearInputRef = useRef(null);
  const monthInputRef = useRef(null);
  const dayInputRef = useRef(null);

  // Function to handle click event on the wrapper div
  const handleYearInputClick = () => {
    yearInputRef.current.focus(); // Set focus on the year input element
  };

  // Function to handle click event on the month input element
  const handleMonthInputClick = () => {
    monthInputRef.current.focus(); // Set focus on the month input element
  };

  // Function to handle click event on the day input element
  const handleDayInputClick = () => {
    dayInputRef.current.focus(); // Set focus on the day input element
  };

  const handleWrapperClick = (e) => {
    if (
      e.target !== yearInputRef.current &&
      e.target !== monthInputRef.current &&
      e.target !== dayInputRef.current
    ) {
      if (yearInputRef.current) {
        yearInputRef.current.focus();
      } else if (monthInputRef) {
        monthInputRef.current.focus();
      } else if (dayInputRef) {
        dayInputRef.current.focus();
      }
    }
  };

  // Validate the date when any of the fields change
  useEffect(() => {
    validateDate;
  }, [validateDate]);

  return (
    <div className="flex py-6 ">
      <p className="w-[150px] py-3 inline-block">
        <span className="font-semibold text-lg relative">
          생년월일
          <span className="text-[#FF483D] inline-block absolute -top-3 -right-3">
            *
          </span>
        </span>
      </p>

      <div className="ml-2 flex-col">
        <div
          className="border border-[#A6A6A6] p-3 w-[410px] rounded-lg"
          onClick={handleWrapperClick}
        >
          <label htmlFor="year" className="sr-only">
            연도 입력창
          </label>
          <input
            type="text"
            id="year"
            name="year"
            maxLength="4"
            value={year}
            onChange={handleInputChange}
            placeholder="YYYY"
            className="w-12 text-lg text-center outline-none"
            ref={yearInputRef}
            onClick={handleYearInputClick}
          />
          <span className="text-[#A6A6A6] text-lg"> / </span>
          <label htmlFor="month" className="sr-only">
            달 입력창
          </label>
          <input
            type="text"
            id="month"
            name="month"
            maxLength="2"
            value={month}
            onChange={handleInputChange}
            placeholder="MM"
            className="w-8 text-lg text-center outline-none"
            ref={monthInputRef}
            onClick={handleMonthInputClick}
          />
          <span className="text-[#A6A6A6] text-lg"> / </span>
          <label htmlFor="day" className="sr-only">
            일 입력창
          </label>
          <input
            type="text"
            id="day"
            name="day"
            maxLength="2"
            value={day}
            onChange={handleInputChange}
            placeholder="DD"
            className="w-8 text-lg text-center outline-none"
            ref={dayInputRef}
            onClick={handleDayInputClick}
          />
        </div>
        {!isValid && (
          <p className="mt-2 text-error text-sm font-medium">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default BirthDate2;
