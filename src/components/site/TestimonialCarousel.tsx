"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const QUOTES = [
  {
    quote:
      "TAF bám sát kế hoạch kiểm toán, phát hiện vấn đề kế toán quan trọng trước khi nộp BCTC và giải thích kiến nghị một cách thực tế cho ban lãnh đạo.",
    name: "Giám đốc Tài chính",
    org: "Doanh nghiệp sản xuất FDI · Bình Dương",
    initials: "TC",
  },
  {
    quote:
      "Báo cáo song ngữ phát hành đúng hạn, công ty mẹ tại Nhật chấp nhận ngay mà không cần soát xét lại — tiết kiệm cho chúng tôi cả tháng làm việc.",
    name: "Kế toán trưởng",
    org: "Công ty công nghệ Nhật Bản · TP. HCM",
    initials: "HN",
  },
  {
    quote:
      "Đội ngũ TAF làm việc trực tiếp với cơ quan thuế, giúp doanh nghiệp xử lý dứt điểm các vướng mắc tồn đọng nhiều năm.",
    name: "Tổng Giám đốc",
    org: "Tập đoàn xây dựng · Hà Nội",
    initials: "VL",
  },
];

export function TestimonialCarousel() {
  return (
    <Carousel opts={{ loop: true, align: "start" }} className="w-full">
      <CarouselContent>
        {QUOTES.map((q, i) => (
          <CarouselItem key={i} className="basis-full">
            <figure>
              <blockquote className="font-display text-2xl md:text-3xl lg:text-[2.25rem] leading-[1.3] text-white">
                <span className="text-accent brace-glow">“</span>
                {q.quote.split(" giải thích kiến nghị một cách thực tế").length > 1 ? (
                  <>
                    {q.quote.split(" giải thích kiến nghị một cách thực tế")[0]}{" "}
                    <em className="not-italic font-display italic text-accent">
                      giải thích kiến nghị một cách thực tế
                    </em>
                    {q.quote.split(" giải thích kiến nghị một cách thực tế")[1]}
                  </>
                ) : (
                  q.quote
                )}
                <span className="text-accent brace-glow">”</span>
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-accent/70 text-accent font-display italic text-sm tabular-nums">
                  {q.initials}
                </span>
                <span className="h-px w-6 bg-brand-red" />
                <span className="text-sm text-white/75 font-serif">
                  <span className="text-white">{q.name}</span> — {q.org}
                </span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-8 flex items-center gap-3">
        <CarouselPrevious className="static translate-x-0 translate-y-0 bg-transparent text-accent border-accent/50 hover:bg-brand-red hover:text-white hover:border-brand-red" />
        <CarouselNext className="static translate-x-0 translate-y-0 bg-transparent text-accent border-accent/50 hover:bg-brand-red hover:text-white hover:border-brand-red" />
      </div>
    </Carousel>
  );
}
