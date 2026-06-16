import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Phone, Info, HelpCircle, Calendar } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section, Eyebrow } from "@/components/site/Section";
import { RelatedArticles } from "@/components/site/RelatedArticles";

const SITE_ORIGIN = "https://tafvn.lovable.app";
const PATH =
  "/ho-kinh-doanh-da-ke-khai-thue-quy-i-2026-co-can-dieu-chinh-lai-nhung-dieu-phai-kiem-tra-ngay-theo-quy-dinh-thue-moi-nam-2026";
const TITLE =
  "Hộ kinh doanh đã kê khai thuế Quý I/2026 có cần điều chỉnh lại? Những điều phải kiểm tra ngay";
const DESCRIPTION =
  "Năm 2026 có nhiều thay đổi về quản lý thuế với hộ kinh doanh, cá nhân kinh doanh và người bán hàng online. Hộ kinh doanh đã kê khai thuế Quý I/2026 nên rà soát lại những gì? Hướng dẫn kiểm tra hồ sơ thuế theo quy định mới.";
const OG_IMAGE = "/ho-kinh-doanh-ke-khai-thue-quy-i-2026-taf.jpg";

export const Route = createFileRoute(
  "/ho-kinh-doanh-da-ke-khai-thue-quy-i-2026-co-can-dieu-chinh-lai-nhung-dieu-phai-kiem-tra-ngay-theo-quy-dinh-thue-moi-nam-2026",
)({
  head: () => ({
    meta: [
      { title: TITLE + " | TAF" },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "hộ kinh doanh, dịch vụ kế toán hộ kinh doanh, rà soát hồ sơ thuế hộ kinh doanh, thuế hộ kinh doanh online 2026, kê khai thuế hộ kinh doanh online, rủi ro thuế hộ kinh doanh, kế toán tiktok shop, thuế tiktok shop",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PATH },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESCRIPTION,
          datePublished: "2026-05-20",
          dateModified: "2026-05-22",
          author: { "@type": "Organization", name: "Công ty TNHH Tư vấn Kiểm toán TAF" },
          publisher: { "@type": "Organization", name: "TAF" },
          mainEntityOfPage: `${SITE_ORIGIN}${PATH}`,
        }),
      },
    ],
  }),
  component: ArticlePage,
});

const HOTLINE_DISPLAY = "0924 580 580";
const HOTLINE_TEL = "+84924580580";

function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="t-h2 md:text-[1.9rem] text-foreground mt-12 mb-4 scroll-mt-24"
    >
      {children}
    </h2>
  );
}
function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="t-h3 text-foreground mt-7 mb-2.5">{children}</h3>
  );
}
function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-[1.0625rem] text-foreground/85 font-serif leading-[1.75] mb-4">{children}</p>
  );
}
function Bullets({ items, marker = "—" }: { items: ReactNode[]; marker?: string }) {
  return (
    <ul className="my-5 space-y-2.5">
      {items.map((it, i) => (
        <li
          key={i}
          className="text-[1.0625rem] text-foreground/85 font-serif leading-relaxed flex gap-3"
        >
          <span className="text-accent-foreground shrink-0">{marker}</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function ArticlePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Tin tức", to: "/tin-tuc" },
          { label: "Hộ kinh doanh kê khai thuế Quý I/2026" },
        ]}
      />

      {/* Hero */}
      <Section className="!pb-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Eyebrow>Tin chuyên môn</Eyebrow>
          </div>
          <h1 className="t-h2 md:text-[2.6rem] text-foreground">
            Hộ kinh doanh đã kê khai thuế Quý I/2026 có cần điều chỉnh lại? Những điều phải kiểm
            tra ngay theo quy định thuế mới năm 2026
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} className="text-accent-foreground" /> Cập nhật: 22/05/2026
            </span>
            <span className="h-3 w-px bg-border" />
            <span>Biên soạn bởi đội ngũ TAF</span>
          </div>
          <div className="rule-gold mt-8" />
        </div>
      </Section>

      {/* Body */}
      <Section className="!pt-0">
        <article className="max-w-3xl">
          <img
            src={OG_IMAGE}
            alt="Hộ kinh doanh đã kê khai thuế Quý I/2026 có cần điều chỉnh lại? - TAF"
            width={1280}
            height={720}
            className="mb-8 w-full rounded-[3px] border border-border"
          />
          <P>
            Năm 2026 đang là giai đoạn có nhiều thay đổi đáng chú ý liên quan đến quản lý thuế đối
            với hộ kinh doanh, cá nhân kinh doanh và người bán hàng online. Đặc biệt, sau khi xuất
            hiện các quy định mới liên quan đến ngưỡng doanh thu chịu thuế và việc quản lý dữ liệu
            từ sàn thương mại điện tử, rất nhiều hộ kinh doanh bắt đầu rơi vào trạng thái hoang
            mang với hàng loạt câu hỏi:
          </P>
          <ul className="my-5 space-y-2.5">
            {[
              "Đã nộp thuế Quý I/2026 rồi có cần điều chỉnh lại không?",
              "Nếu đã kê khai theo hướng dẫn cũ thì có bị sai không?",
              "Có được xử lý khoản thuế nộp thừa không?",
              "TikTok Shop, Shopee, affiliate có đang bị cơ quan thuế đối chiếu dữ liệu không?",
              "Nhận tiền qua tài khoản cá nhân có bị ghi nhận doanh thu không?",
            ].map((q) => (
              <li
                key={q}
                className="text-[1.0625rem] text-foreground/85 font-serif leading-relaxed flex gap-3"
              >
                <HelpCircle size={18} className="text-brand-red shrink-0 mt-1" />
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <div className="my-6 rounded-[2px] border-l-2 border-brand-red bg-brand-red-soft/60 p-5">
            <p className="flex items-start gap-2.5 text-[0.98rem] text-foreground/85 font-serif leading-relaxed">
              <Info size={18} className="text-brand-red shrink-0 mt-0.5" />
              <span>
                Nhiều nội dung trên mạng xã hội đang diễn giải chưa đầy đủ, khiến không ít hộ kinh
                doanh hiểu sai rằng{" "}
                <em className="text-foreground">
                  “doanh thu dưới 1 tỷ đồng là không cần kê khai gì nữa.”
                </em>{" "}
                Đây là cách hiểu rất nguy hiểm.
              </span>
            </p>
          </div>
          <P>
            Cơ quan thuế hiện không còn quản lý theo kiểu thủ công như trước. Việc quản lý dữ liệu
            doanh thu đang chuyển mạnh sang nhiều nguồn đối chiếu:
          </P>
          <Bullets
            items={[
              "Đối chiếu tài khoản ngân hàng",
              "Dữ liệu sàn thương mại điện tử",
              "Ví điện tử và nền tảng thanh toán",
              "Hóa đơn điện tử",
              "Dữ liệu livestream bán hàng",
              "Dữ liệu affiliate và quảng cáo online",
            ]}
          />
          <P>
            Điều này khiến việc rà soát hồ sơ thuế Quý I/2026 trở thành công việc rất quan trọng
            đối với hộ kinh doanh trong năm nay.
          </P>

          {/* H2 1 */}
          <H2 id="duoi-1-ty">
            Không phải hộ kinh doanh dưới 1 tỷ đồng đều “không cần làm gì”
          </H2>
          <P>
            Một trong những hiểu lầm lớn nhất hiện nay là “doanh thu dưới 1 tỷ đồng thì không cần
            quan tâm đến thuế”. Trên thực tế, quy định mới chủ yếu liên quan đến ngưỡng doanh thu
            chịu thuế, phương pháp quản lý và nghĩa vụ kê khai trong từng trường hợp cụ thể.
          </P>
          <P>Không phải mọi hộ kinh doanh đều:</P>
          <Bullets
            marker="✕"
            items={[
              "Được miễn toàn bộ nghĩa vụ thuế",
              "Không cần kê khai",
              "Hoặc tự động được hoàn tiền thuế đã nộp",
            ]}
          />
          <P>Việc áp dụng còn phụ thuộc vào:</P>
          <Bullets
            items={[
              "Ngành nghề kinh doanh",
              "Doanh thu thực tế",
              "Phương pháp quản lý thuế",
              "Hoạt động online hay offline",
              "Doanh thu ghi nhận qua ngân hàng",
              "Dữ liệu từ sàn thương mại điện tử",
            ]}
          />
          <P>
            Đặc biệt, nhóm TikTok Shop, Shopee, Facebook bán hàng, livestream, affiliate marketing
            và những người nhận tiền qua nhiều tài khoản đang là nhóm được cơ quan thuế rà soát rất
            mạnh trong năm 2026.
          </P>

          {/* H2 2 */}
          <H2 id="vi-sao-ra-soat">
            Vì sao nhiều hộ kinh doanh đang phải rà soát lại hồ sơ thuế Quý I/2026?
          </H2>
          <P>
            Giai đoạn đầu năm 2026 là thời điểm chuyển tiếp của nhiều quy định mới. Vì vậy thực tế
            đã phát sinh nhiều trường hợp: kê khai theo hướng dẫn cũ, chưa cập nhật kịp quy định
            mới, áp sai cách tính thuế, kê khai chưa đầy đủ doanh thu, hoặc phát sinh chênh lệch
            giữa doanh thu thực tế và dữ liệu cơ quan thuế ghi nhận.
          </P>
          <P>
            Trước đây, nhiều hộ kinh doanh thường chỉ kê khai doanh thu tiền mặt. Tuy nhiên hiện
            nay, doanh thu chuyển khoản, doanh thu từ sàn TMĐT, tiền ví điện tử, tiền quảng cáo,
            tiền affiliate và tiền booking KOL/KOC đều có khả năng được ghi nhận và đối chiếu dữ
            liệu. Điều này dẫn đến nhiều tình huống: doanh thu thực tế cao hơn doanh thu kê khai,
            số thuế nộp chưa chính xác, hoặc ngược lại là đã nộp cao hơn nghĩa vụ thực tế.
          </P>
          <P>
            Nếu không rà soát sớm, hộ kinh doanh có thể gặp truy thu thuế, tiền chậm nộp, phải
            giải trình doanh thu hoặc bị đánh giá rủi ro cao khi cơ quan thuế kiểm tra dữ liệu.
          </P>

          {/* H2 3 */}
          <H2 id="rui-ro-online">
            Hộ kinh doanh online đang đối mặt với rủi ro thuế gì trong năm 2026?
          </H2>
          <P>
            Doanh thu chuyển khoản bị đối chiếu là rủi ro lớn nhất hiện nay. Rất nhiều người bán
            hàng nhận tiền qua tài khoản cá nhân, chia doanh thu qua nhiều tài khoản, dùng ví điện
            tử, hoặc nhận COD rồi chuyển khoản lại nhưng không theo dõi doanh thu thực tế đã ghi
            nhận trên hệ thống.
          </P>
          <P>
            Trong khi đó, cơ quan thuế hiện đang đẩy mạnh kết nối dữ liệu ngân hàng, đối chiếu dòng
            tiền và kiểm tra doanh thu thương mại điện tử. Nếu doanh thu thực tế chênh lệch lớn với
            hồ sơ kê khai, hộ kinh doanh có thể bị yêu cầu giải trình, bị truy thu, phát sinh tiền
            chậm nộp hoặc bị đánh giá rủi ro cao.
          </P>

          {/* H2 4 */}
          <H2 id="affiliate">Người làm affiliate marketing dễ bị sai thuế</H2>
          <P>
            Nhiều người làm affiliate hiện nay nhận tiền từ nhiều nguồn khác nhau như TikTok,
            Shopee Affiliate, YouTube, nền tảng quảng cáo hoặc booking nhãn hàng. Tuy nhiên, không
            phải ai cũng theo dõi rõ khoản tiền nào đã được khấu trừ thuế, khoản nào đã kê khai và
            doanh thu nào đang được ghi nhận. Đây là nguyên nhân khiến nhiều cá nhân, hộ kinh doanh
            dễ rơi vào tình trạng nộp thiếu thuế mà không biết, hoặc đã nộp dư nhưng không kiểm tra
            lại hồ sơ để xử lý kịp thời.
          </P>
          <P>
            Với những người hoạt động affiliate chuyên nghiệp, việc sử dụng{" "}
            <Link
              to="/dich-vu-ke-toan-tron-goi-tphcm"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              dịch vụ kế toán
            </Link>{" "}
            để theo dõi dòng tiền, doanh thu và nghĩa vụ thuế đang trở thành nhu cầu cần thiết,
            nhất là khi dữ liệu từ nền tảng số và tài khoản ngân hàng ngày càng được quản lý chặt
            chẽ hơn.
          </P>
          <H3>Có phải đã nộp thuế là xong?</H3>
          <P>
            Rất nhiều hộ kinh doanh đang hiểu rằng “đã nộp thuế rồi thì không cần kiểm tra lại”.
            Thực tế, nếu kê khai sai, kê khai thiếu, áp sai tỷ lệ thuế hoặc phát sinh chênh lệch
            doanh thu, người nộp thuế vẫn nên chủ động rà soát và điều chỉnh sớm.
          </P>
          <P>
            Theo quy định hiện hành về quản lý thuế, người nộp thuế có quyền kê khai bổ sung, điều
            chỉnh hồ sơ khi phát hiện sai sót và đề nghị xử lý khoản nộp thừa nếu có căn cứ phù hợp.
            Điều quan trọng là phải có hồ sơ giải trình, chứng từ đầy đủ và dữ liệu doanh thu rõ
            ràng — đây là cơ sở để hạn chế rủi ro khi cơ quan thuế yêu cầu đối chiếu hoặc kiểm tra
            sau này.
          </P>

          {/* H2 5 */}
          <H2 id="nhom-can-kiem-tra">Những nhóm hộ kinh doanh nên kiểm tra hồ sơ thuế ngay</H2>
          <H3>Người bán hàng trên TikTok Shop, Shopee, Lazada</H3>
          <P>
            Các sàn thương mại điện tử hiện nay đều lưu trữ nhiều dữ liệu liên quan đến đơn hàng,
            doanh thu, phí nền tảng, hoàn hàng, tài khoản nhận tiền và lịch sử giao dịch. Vì vậy,
            người bán hàng online không nên chỉ dựa vào số tiền đã khai trước đó, mà cần đối chiếu
            lại dữ liệu thực tế với hồ sơ thuế đã nộp để phát hiện chênh lệch nếu có.
          </P>
          <H3>Người livestream bán hàng</H3>
          <P>
            Livestream bán hàng là nhóm có tốc độ tăng doanh thu nhanh, nhưng nhiều trường hợp chưa
            có hệ thống quản lý dòng tiền rõ ràng. Nếu không lưu bảng kê, không theo dõi doanh thu
            thực tế và không tách bạch chi phí, rủi ro sai lệch thuế rất dễ phát sinh.
          </P>
          <H3>Người nhận tiền qua nhiều tài khoản cá nhân</H3>
          <P>
            Một số hộ kinh doanh vẫn dùng nhiều tài khoản ngân hàng, tài khoản người thân hoặc
            nhiều ví điện tử khác nhau để nhận tiền. Cách làm này có thể khiến việc tổng hợp doanh
            thu bị thiếu hoặc sai lệch. Khi dữ liệu tài khoản ngày càng được kết nối, việc giải
            trình nguồn tiền sẽ khó hơn nếu không có hồ sơ theo dõi đầy đủ.
          </P>
          <H3>Hộ kinh doanh có ý định thành lập công ty</H3>
          <P>
            Khi doanh thu tăng mạnh và hoạt động kinh doanh bắt đầu chuyên nghiệp hơn, hộ kinh
            doanh nên cân nhắc chuyển đổi lên mô hình doanh nghiệp. Việc{" "}
            <Link
              to="/dich-vu-thanh-lap-doanh-nghiep-tron-goi"
              className="font-medium text-brand-red-ink underline decoration-accent/50 underline-offset-4 hover:decoration-brand-red"
            >
              thành lập công ty
            </Link>{" "}
            giúp quản trị dòng tiền tốt hơn, minh bạch thuế, thuận lợi khi hợp tác với đối tác và
            mở rộng hoạt động kinh doanh.
          </P>

          {/* H2 6 */}
          <H2 id="quy-trinh">Quy trình rà soát hồ sơ thuế hộ kinh doanh năm 2026</H2>
          <ol className="my-5 space-y-4 list-none">
            {[
              {
                t: "Tổng hợp toàn bộ doanh thu thực tế",
                d: "Rà soát đầy đủ doanh thu từ tiền mặt, chuyển khoản, ví điện tử, sàn TMĐT, affiliate, booking, quảng cáo và COD — không chỉ nhìn vào phần doanh thu đã kê khai trước đó.",
              },
              {
                t: "Đối chiếu với hồ sơ đã nộp",
                d: "Kiểm tra lại doanh thu đã kê khai, ngành nghề áp dụng, tỷ lệ thuế, số tiền đã nộp và dữ liệu đang ghi nhận trên các nền tảng kinh doanh.",
              },
              {
                t: "Kiểm tra rủi ro chênh lệch",
                d: "Nếu doanh thu thực tế cao hơn, doanh thu chuyển khoản chưa kê khai hoặc dữ liệu từ sàn có chênh lệch, nên xử lý sớm thay vì chờ cơ quan thuế yêu cầu giải trình.",
              },
              {
                t: "Kê khai bổ sung nếu cần",
                d: "Khi phát hiện sai sót, người nộp thuế có thể thực hiện kê khai bổ sung, điều chỉnh thông tin, cập nhật doanh thu và xử lý chênh lệch theo quy định.",
              },
              {
                t: "Lưu trữ đầy đủ hồ sơ",
                d: "Lưu sao kê ngân hàng, bảng kê đơn hàng, dữ liệu sàn, hóa đơn, chứng từ thanh toán và dữ liệu quảng cáo — căn cứ quan trọng nếu cần giải trình sau này.",
              },
            ].map((s, i) => (
              <li key={s.t} className="flex gap-4">
                <span className="font-mono text-sm text-brand-red-ink tabular-nums shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-lg text-foreground">{s.t}</span>
                  <span className="block mt-1 text-[1.0625rem] text-foreground/85 font-serif leading-relaxed">
                    {s.d}
                  </span>
                </span>
              </li>
            ))}
          </ol>
          <P>
            Điểm đáng chú ý là cơ quan thuế đang chuyển mạnh sang quản lý bằng dữ liệu số. Điều này
            khiến doanh thu online ngày càng minh bạch hơn, hoạt động TikTok Shop dễ bị đối chiếu
            hơn, affiliate marketing được theo dõi rõ hơn và dòng tiền ngân hàng được rà soát kỹ
            hơn trước. Tư duy “kinh doanh online nhỏ lẻ thì không ai biết” không còn phù hợp với
            thực tế hiện nay.
          </P>
          <P>
            Năm 2026 là giai đoạn hộ kinh doanh, cá nhân kinh doanh online và người làm affiliate
            cần chủ động hơn trong việc quản lý hồ sơ thuế. Việc đã kê khai hoặc đã nộp thuế không
            đồng nghĩa hồ sơ đã hoàn toàn an toàn. Nếu doanh thu chưa chính xác, dữ liệu chuyển
            khoản chưa được đối chiếu hoặc phát sinh chênh lệch với dữ liệu sàn TMĐT, người kinh
            doanh nên rà soát càng sớm càng tốt. Chủ động kiểm tra và xử lý sớm luôn an toàn hơn so
            với việc chờ cơ quan thuế yêu cầu giải trình.
          </P>
        </article>
      </Section>

      {/* CTA */}
      <Section className="!pt-0">
        <div className="rounded-[2px] border border-border bg-cream/60 p-6 md:p-9">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl text-foreground">TAF hỗ trợ hộ kinh doanh</h2>
            <p className="mt-3 text-muted-foreground font-serif leading-relaxed">
              Nếu bạn đang bán hàng online, làm TikTok Shop, làm affiliate, nhận tiền qua nhiều tài
              khoản hoặc chưa chắc hồ sơ thuế hiện tại đã đúng, TAF có thể hỗ trợ:
            </p>
            <Bullets
              items={[
                "Rà soát hồ sơ thuế hộ kinh doanh",
                "Kiểm tra doanh thu TikTok Shop, Shopee, affiliate",
                "Hỗ trợ kê khai bổ sung",
                "Kiểm tra rủi ro dữ liệu chuyển khoản",
                "Tư vấn xử lý khoản thuế nộp thừa",
                "Hỗ trợ thành lập doanh nghiệp khi cần mở rộng kinh doanh",
              ]}
            />
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                to="/lien-he"
                className="group inline-flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-3.5 text-sm font-medium rounded-[2px] hover:bg-brand-red-ink transition-all"
              >
                <span className="uppercase tracking-[0.14em]">Liên hệ tư vấn</span>
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={`tel:${HOTLINE_TEL}`}
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3.5 text-sm font-medium rounded-[2px] hover:border-accent transition"
              >
                <Phone size={16} /> Hotline / Zalo · {HOTLINE_DISPLAY}
              </a>
            </div>
            <p className="mt-6 font-display text-sm text-accent-foreground italic">
              TAF – Trao giá trị, nhận niềm tin.
            </p>
          </div>
        </div>
      </Section>

      <RelatedArticles currentHref={PATH} />
    </>
  );
}
