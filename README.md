
# <p align="center">Kiến trúc Microservices của dự án</p>
Microservices Architecture (Kiến trúc phân lớp) là một phong cách kiến trúc phần mềm phổ biến, trong đó hệ thống được chia thành các lớp (layers) hoặc tầng. Mỗi lớp có một vai trò và trách nhiệm riêng, và tương tác với các lớp khác theo một cách có tổ chức và quy củ. Mô hình này giúp quản lý sự phức tạp của hệ thống bằng cách phân chia nó thành các phần nhỏ hơn, dễ quản lý hơn.

Các Lớp Thường Gặp trong Microservice Architecture:
![a1](https://github.com/buigiadai/Nhom-31-SoftwareArchitecture/assets/93437394/af759c21-2f4c-4ab3-b235-72eb2efa1006)
- Lớp API Gateway: Đây là lớp đầu tiên mà các yêu cầu từ người dùng hoặc các ứng dụng bên ngoài chuyển đến. API Gateway chịu trách nhiệm định tuyến yêu cầu đến các dịch vụ phù hợp trong hệ thống Microservices.
-  Netflix Eureka là một dịch vụ phát hiện (server discovery) cho các ứng dụng microservices. Nó cho phép các dịch vụ trong hệ thống tự động phát hiện và giao tiếp với nhau mà không cần cấu hình thủ công các điểm cuối (endpoints).
- Database Layer: Mỗi dịch vụ có thể có cơ sở dữ liệu của riêng mình hoặc chia sẻ cơ sở dữ liệu với các dịch vụ khác. Lớp này quản lý truy cập và tương tác với các cơ sở dữ liệu phù hợp.
- Authenticated: Đảm bảo rằng chỉ có những người dùng đã được xác thực mới có thể truy cập các tài nguyên bảo mật của microservices. Xác Thực và Ủy Quyền: Sử dụng JWT (JSON Web Token) để xác thực người dùng và ủy quyền cho họ truy cập các dịch vụ.
- Apache Kafka: là một nền tảng truyền tải dữ liệu luồng mạnh mẽ và mở rộng, được thiết kế để xử lý các luồng dữ liệu thời gian thực.
- Docker: tạo là một môi trường độc lập và nhẹ, bao gồm tất cả các thành phần cần thiết để chạy ứng dụng, bao gồm cả mã nguồn, runtime, thư viện, và các phụ thuộc khác, giúp ứng dụng của bạn trở nên nhất quán và dễ dàng triển khai trên nhiều môi trường khác nhau. 

Đặc Điểm của Microservices Architecture:
- Phân tách chức năng tối ưu: Microservices không chỉ chia nhỏ ứng dụng thành các dịch vụ nhỏ, mà còn tập trung vào việc phân tách chức năng cụ thể của ứng dụng. Điều này cho phép mỗi dịch vụ chịu trách nhiệm duy nhất cho một phần nhỏ của hệ thống, tối ưu hóa sự phát triển, triển khai và quản lý.
- API làm giao tiếp chính: Microservices sử dụng giao diện lập trình ứng dụng (API) để giao tiếp với nhau. Các dịch vụ giao tiếp thông qua API này, đảm bảo sự linh hoạt và khả năng tương tác giữa chúng mà không phụ thuộc vào cấu trúc nội bộ.
- Tính độc lập và tự quản lý cao: Mỗi dịch vụ trong mô hình Microservices có thể được phát triển, triển khai và quản lý hoàn toàn độc lập. Điều này mang lại sự linh hoạt và khả năng đáp ứng nhanh chóng với thay đổi và yêu cầu mới mà không làm ảnh hưởng đến toàn bộ hệ thống.
- Khả năng mở rộng dễ dàng: Do tính độc lập của các dịch vụ, việc mở rộng hoặc thu hẹp một phần của hệ thống trở nên dễ dàng hơn. Điều này cho phép tối ưu hóa tài nguyên và tăng cường hiệu suất mà không cần thay đổi toàn bộ kiến trúc.
- Khả năng tái sử dụng và phát triển linh hoạt: Mỗi dịch vụ có thể được phát triển và triển khai độc lập với công nghệ và quy trình phát triển riêng. Điều này tạo điều kiện thuận lợi cho việc tái sử dụng mã nguồn, cũng như cho phát triển và bảo trì dễ dàng hơn.

Lợi Ích của Microservices Architecture:
- Cho phép lập trình viên linh động hơn trong việc lựa chọn ngôn ngữ, công cụ và nền tảng để phát triển và triển khai các microservices (tuy nhiên trong một hệ thống, việc lựa chọn các ngôn ngữ khác nhau để phát triển các microservices không được khuyến khích). 
- Dễ dàng thực hiện tự động tích hợp và tự động triển khai (CI-CD) bằng cách sử dụng một số công cụ như Jenkins, Hudson … 
- Mỗi microservices có kích thước nhỏ, giúp cho các lập trình viên dễ tiếp cận, đọc hiểu source code. Do vậy các thành viên mới tham gia team sẽ hòa nhập và đóng góp cho team nhanh hơn. 
- Dễ dàng mở rộng và tích hợp với các dịch vụ của bên thứ ba. 
- Cô lập lỗi tốt hơn, khi một microservices bị lỗi và ngừng hoạt động thì các microservices khác vẫn có thể hoạt động bình thường. Với mô hình nguyên khối, một lỗi nhỏ có thể làm cả hệ thống ngừng hoạt động. 
- Khi cần thay đổi một thành phần, thì chỉ cần sửa đổi, cập nhật và triển khai lại thành phần đó chứ không cần triển khai lại toàn bộ hệ thống. 

Hạn Chế của Microservices Architecture :
- Việc triển khai hệ thống microservices phức tạp hơn nhiều so với việc triển khai hệ thống nguyên khối. 
- Cần tính toán kích cỡ của một microservices. Nếu một microservices quá lớn, bản thân nó trở thành một ứng dụng theo kiến trúc nguyên khối.  
- Nếu một microservices quá nhỏ thì độ phức tạp của hệ thống tăng lên rất nhiều, làm cho hệ thống trở lên khó hiểu, lúc này việc quản lý giám sát và triển khai hệ thống sẽ khó khăn hơn. 
- Khi ứng dụng ngày càng lớn lên, số lượng microservices ngày càng nhiều, các lập trình viên thường có xu hướng sử dụng sự hỗ trợ từ các công cụ mã nguồn mở, hoặc của bên thứ 3, việc sử dụng, tích hợp các công cụ này làm cho hệ thống khó kiểm soát và có thể bị dính các mã độc làm cho hệ thống kém an toàn. 


Lý do chọn Microservices architecture trong hệ thống quản lý lớp học tín chỉ:
- Khả năng mở rộng linh hoạt: Cho phép mở rộng từng phần của hệ thống một cách độc lập, giúp tăng cường hiệu suất khi có nhiều sinh viên truy cập đồng thời.
- Tính linh hoạt trong phát triển và triển khai: Phát triển và triển khai từng dịch vụ độc lập giúp giảm thời gian triển khai tính năng mới hoặc sửa lỗi.
- Khả năng chịu lỗi cao: Lỗi trong một dịch vụ không ảnh hưởng đến các dịch vụ khác, đảm bảo hệ thống vẫn hoạt động bình thường.
- Tăng cường bảo trì và nâng cấp: Dịch vụ nhỏ hơn, tách biệt dễ bảo trì và nâng cấp, và dễ dàng thêm tính năng mới cho từng dịch vụ cụ thể.
- Tái sử dụng dịch vụ: Các dịch vụ có thể tái sử dụng trong các ứng dụng khác, giúp tối ưu hóa sự phát triển và bảo trì.
- Khả năng quan sát và giám sát: Dễ dàng theo dõi hiệu suất và hành vi của từng dịch vụ riêng biệt, giúp phát hiện và khắc phục sự cố nhanh chóng.
- Hỗ trợ tích hợp liên tục và triển khai liên tục (CI/CD): Phù hợp với CI/CD, cho phép tự động xây dựng, kiểm thử và triển khai từng dịch vụ một cách nhanh chóng và độc lập.
- Phù hợp với DevOps và Agile: Khuyến khích sự cộng tác chặt chẽ giữa các nhóm phát triển và vận hành, phù hợp với phương pháp Agile, và cho phép phản ứng nhanh chóng với thay đổi và cải tiến liên tục.

## Hướng dẫn sử dụng
### Backend
1. Dùng trình soạn thảo java mở folder:  ```backend```

2. Run lần lượt các file:
``` bash
Module discovery-server: DiscoveryServerApplication.java 
Module api-gateway: ApiGatewayApplication.java 
Module service-dkhp: ServiceDkhpApplication.java 
Module service-sinhvien: ServiceSinhvienApplication.java 
Module service-giaovien: ServiceGiaovienApplication.java 
```

### Frontend
1. Di chuyển vào thư mục frontend
``` bash
cd frontend
```

2. Tải các dependencies
``` bash
npm install
```

3. Chạy dự án
``` bash
npm start
```

