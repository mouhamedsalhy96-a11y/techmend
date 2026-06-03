import { Star } from "lucide-react";

const reviews = [
  {
    name: "Hugh Rogers",
    date: "a year ago",
    text: "Excellent service. I had my battery and camera lens replaced on my iPhone 11. Everything was done on time and at a high level. 10/10",
  },
  {
    name: "Callum O'Hare",
    date: "9 months ago",
    text: "We've been using Tech Mend for years, Tyler has fixed a variety of appliances for us, and most recently, the screens of three of our MacBooks. I would recommend it to any company or individual in need of repairs.",
  },
  {
    name: "Temperamental Birds",
    date: "a year ago",
    text: "Amazing service! I had my iPhone screen and screen protector replaced. Highly recommended. My daughter said her phone had never looked so good and she would give 6 stars if it was possible!",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Trusted by the Community
          </h2>
          <p className="text-lg text-gray-600">
            Don&apos;t just take our word for it. Here is what our customers have to say about their experience with TechMend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#eab308] text-[#eab308]" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                &quot;{review.text}&quot;
              </p>
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}