const serverResponseDelayImitation = async (delayTimer: number) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, delayTimer);
  });
};

export default serverResponseDelayImitation;
