export default function VideosSection() {
  const videos = [
    { hash: "yyerz9i", title: "ویدیوی معرفی پرده بیمارستانی زانکو دکور ۱" },
    { hash: "fkqw011", title: "ویدیوی معرفی پرده بیمارستانی زانکو دکور ۲" },
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[#229799] font-semibold text-sm mb-2">ویدیوها</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">ویدیوهای معرفی</h2>
          <p className="text-gray-500">آشنایی بیشتر با محصولات و خدمات زانکو دکور</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {videos.map((video) => (
            <div key={video.hash} className="rounded-2xl overflow-hidden shadow-lg bg-gray-100">
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
      </div>
    </section>
  );
}
