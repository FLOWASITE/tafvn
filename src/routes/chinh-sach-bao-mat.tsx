import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Section } from "@/components/site/Section";
import { useT } from "@/lib/i18n/context";


export const Route = createFileRoute("/chinh-sach-bao-mat")({
  head: () => ({
    meta: [
      { title: "Chính sách bảo mật — TAF" },
      {
        name: "description",
        content:
          "Chính sách bảo mật thông tin khách hàng và dữ liệu cá nhân khi sử dụng dịch vụ và website của TAF.",
      },
      { property: "og:title", content: "Chính sách bảo mật — TAF" },
      { property: "og:url", content: "/chinh-sach-bao-mat" },
    ],
    links: [{ rel: "canonical", href: "/chinh-sach-bao-mat" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Chính sách bảo mật" }]} />
      <Section>
        <article className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-foreground">
            Chính sách bảo mật
          </h1>
          <div className="rule-gold my-8" />
          <div className="prose-taf">
            <p>
              TAF cam kết bảo mật mọi thông tin khách hàng cung cấp khi liên hệ qua website và
              trong quá trình thực hiện dịch vụ. Tài liệu này mô tả các loại dữ liệu chúng tôi
              thu thập, mục đích sử dụng và quyền của bạn.
            </p>
            <h2>Dữ liệu thu thập qua website</h2>
            <p>
              Khi bạn gửi form liên hệ, chúng tôi lưu các trường: họ tên, email, số điện thoại,
              công ty, dịch vụ quan tâm và mô tả nhu cầu. Chúng tôi không sử dụng cookies theo
              dõi hành vi của bên thứ ba ngoài các cookie kỹ thuật cần thiết để website hoạt động.
            </p>
            <h2>Mục đích sử dụng</h2>
            <p>
              Thông tin được sử dụng để KTV phụ trách liên hệ lại, gửi đề xuất phí và trao đổi
              chi tiết dịch vụ. TAF không chia sẻ dữ liệu của bạn với bên thứ ba ngoài các đối
              tác kỹ thuật phục vụ vận hành website (lưu trữ, gửi email).
            </p>
            <h2>Bảo mật trong quá trình kiểm toán</h2>
            <p>
              Toàn bộ nhân sự của TAF tuân thủ Quy tắc đạo đức nghề nghiệp kế toán, kiểm toán
              theo Thông tư 70/2015/TT-BTC. Hồ sơ kiểm toán được lưu trữ tối thiểu 10 năm theo
              quy định.
            </p>
            <h2>Quyền của bạn</h2>
            <p>
              Bạn có quyền yêu cầu truy cập, sửa đổi hoặc xóa dữ liệu cá nhân do TAF nắm giữ
              bằng cách gửi email tới văn phòng. Chúng tôi phản hồi trong vòng 30 ngày làm việc.
            </p>
          </div>
        </article>
      </Section>
    </>
  );
}
