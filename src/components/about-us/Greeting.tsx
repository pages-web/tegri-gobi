const Greeting = () => {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      <h1 className="text-black font-roboto text-xl font-medium leading-none">
        Greeting
      </h1>
      <div className="flex gap-6 self-stretch items-start">
        <p className="text-black/90 font-roboto text-sm font-normal ">
          Welcome to Tegri Gobi—where luxury meets simplicity, and silence
          becomes a destination. <br /> Here, under the vast Mongolian sky, time
          slows down. The wind carries ancient stories, and every sunrise feels
          like a beginning. Whether you seek rest, inspiration, or quiet wonder,
          our capsule stays offer a <br /> sanctuary shaped by earth, sky, and
          soul. Here in the untouched heart of the Gobi Desert, you’ll sleep
          beneath stars, walk alongside camels, and wake to absolute quiet. Our
          retreat blends modern comfort with <br /> nomadic wisdom, offering
          space to pause, reflect, and remember what matters.
        </p>
      </div>
    </div>
  );
};
export default Greeting;
