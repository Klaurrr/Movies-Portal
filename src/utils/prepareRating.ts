const prepareRating = (value: number | undefined) => {
   return (value) ? value : 0;
};

export default prepareRating;
