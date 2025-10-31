
export default function VideosSection() {
  return (
    <section className="w-full py-12 bg-white">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8">
        ویدیوها
      </h2>
      <div className="mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { hash: "yyerz9i", title: "ویدیوی معرفی پرده بیمارستانی زانکو دکور ۱" },
          { hash: "fkqw011", title: "ویدیوی معرفی پرده بیمارستانی زانکو دکور ۲" },
        ].map((video) => (
          <div key={video.hash} className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={`https://www.aparat.com/video/video/embed/videohash/${video.hash}/vt/frame?titleShow=true&recom=self`}
                title={video.title}
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}