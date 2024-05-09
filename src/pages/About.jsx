const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 item-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto text-justify">
        Welcome to Comfy, where we believe that furniture shopping should be a
        seamless and enjoyable experience. With a passion for quality
        craftsmanship and design, we handpick each piece in our collection to
        ensure that every item brings both beauty and functionality to your
        home. Our commitment to exceptional customer service and attention to
        detail sets us apart, guiding you through every step of creating a space
        you&apos;ll love to live in. Explore our story and discover why Comfy is
        your destination for premium furniture and decor.
      </p>
    </>
  );
};
export default About;
