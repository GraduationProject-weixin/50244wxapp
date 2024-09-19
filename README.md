# [首页查询更多项目](https://github.com/GraduationProject-weixin) 包安装运行


# 50244wxapp教育培训微信小程序ssm

![picture](https://raw.githubusercontent.com/GraduationProject-springboot/.github/main/img/wx.png)

### 点击播放视频 ▼
[![Watch the video](https://i.sstatic.net/Vp2cE.png)]()


# 第1章 绪论
## 1.1 课题背景
目前随着智能手机的不断普及，基本上可以达到人均一台智能手机的地步，在这样的背景下，各行各业如何把自己的服务提供到手机终端上，是一个问题。智能手机的好处就是有各种各样的软件，并且交互性很好，用户使用起来方便，在智能手机刚开始的前几年，有很多行业已经开始提前布局移动终端，占领了相当大的市场，不仅提高了客户满意度，也提高了市场知名度，但是随着时代的发展，如果还一直开发移动终端的软件，会导致用户手机里面需要安装各种各样的软件，用户已经从刚开始的新奇，变成了现在的厌烦，手机内存太小，安装太多东西，或者非强制性的软件，用户都不想安装了。面对如今的用户需求情况，依然开发APP软件已经是一种战略性失败。在国内目前市场上所有的智能手机里面肯定安装得有微信，微信已经变成了智能手机通讯的代名词，而微信推出了微信小程序，不需要用户注册账号，也不需要用户安装多余的软件，只需要通过微信软件就可以访问小程序，对用户极其友善，所以很多企业都瞄准了微信小程序。本课题就是在这样的大环境下研究和实现一款教育培训微信小程序。
## 1.2 课题意义
首先用户可以不需要安装各种各样的APP，只需要一个微信就可以各种访问程序，用户不需要注册各种信息，微信提供了用户一键访问，并且可以在微信里面对小程序进行删除，定位，搜索，以及收藏，微信小程序是目前最火的一个开发方向。很多商家只需要开发出微信小程序，自己部署服务端，然后有任何需要推广的只需要让用户点击微信小程序访问即可，不仅仅给商家提供了一个十多亿用户的平台，也给用户减轻了安装各种APP的负担，并且微信所在的腾讯公司也能获得利润，微信小程序是一款多赢的选择。

本课题研究的教育培训微信小程序前后台分离，让网课信息，观看进度信息，试卷信息等相关信息集中在后台让管理员管理，让学生在小程序端对试卷答题，观看网课视频，下载网课文件以及查看测试记录信息等。该系统让信息管理变得高效，也让学生学习网课，在线考试变得越来越方便。
## 1.3 研究内容
本文对教育培训微信小程序的设计与实现分成六个章节来说明。

第1章：研究教育培训微信小程序的背景，以及开发教育培训微信小程序的意义。

第2章：对开发教育培训微信小程序的环境还有技术进行说明。

第3章：分析教育培训微信小程序的可行性，性能，流程以及功能。

第4章：设计教育培训微信小程序的功能结构，设计数据库E-R图以及对数据表的存储结构进行设计。

第5章：实现教育培训微信小程序的功能并进行功能界面展示。

第6章：对系统测试进行阐述，以及对本系统部分功能进行检测。
# 第2章 开发环境与技术
本章节对开发教育培训微信小程序需要搭建的开发环境，还有教育培训微信小程序开发中使用的编程技术等进行阐述。
## 2.1 Java语言  
Java语言是当今为止依然在编程语言行业具有生命力的常青树之一。Java语言最原始的诞生，不仅仅是创造者感觉C语言在编程上面很麻烦，如果只是专注于业务逻辑的处理，会导致忽略了各种指针以及垃圾回收这些操作，导致出现问题需要解决的时间往往大于正常编程处理业务逻辑的时间，这些是非常浪费时间的。Java语言的创造者就考虑到如何避免这个问题，把指针处理和垃圾处理全部自动化，虽然这会损失一些性能，但是计算机硬件在性能上的发展速度是很快的，这些性能是可以忽略考虑的。并且C语言是针对硬件开发的语言，虽然执行效率高，但是随着硬件的变化或者操作系统的变更，就需要重新编写程序，造成重复劳动，只有解决重复性劳动的语言才算符合生存规律的语言。Java语言的创造者就针对C语言的缺点专门开发了Java语言。让Java语言不管是在什么样的环境里都是可以运行，因为在Java语言运行外面套了一个壳，也就是虚拟机，只要是Java虚拟机能安装的电脑都可以运行Java的程序。
## 2.2 MYSQL数据库
MySQL数据库是一种数据存放方面的专业软件，也是传统的行式数据模式，获取一些数据是先一行一行的获取，然后一行一行的显示，与列式数据库不同。行式数据库主要是处理最重要的数据逻辑部分，并且必须是有效数据，这样每一处的数据关联都是不可损坏，对数据安全要求比较严格还是用MySQL数据库比较好。列式数据库的发明仅仅是因为读取效率高，但是也就仅仅如此罢了。MySQL虽然比起Oracle或者SQL Server来讲，安装包只是几十兆甚至几百兆，有点小，但是功能并不会弱到哪里，严格遵循SQL标准语法。MySQL的数据存放形式从大向小的说是数据库最大，然后是表，每个表里面存放数据是有一定的规则的，数据存放是表格形式的，也就是说有横也有竖，横着的为行，一般表示一条数据，表与表之间还可以进行关联，进行分表操作，如果一条数据相关项目属性太多，那么可以把有效的相关联系做成关联，可以设定是否唯一。
## 2.3 SSM框架
开发一个业务逻辑比较简单的应用，采用这几年最广为流传的SSM框架是很合适的。SSM框架就是Spring MVC框架和Spring框架，以及持久层常用的MyBatis框架。

三个框架有三个不同的作用。普通用户一般都是操作浏览器进行浏览自己喜欢的内容，而显示或者提交，都会被Spring MVC框架进行拦截和处理，进入到更深的一个层次就是控制层，它会智能的匹配提交的路径，对不同的来源匹配不同的处理逻辑，让不同的代码进行执行，如果只是判断用户输入信息格式的问题是不用传入到后台就可以被前端框架处理的，如果需要与数据库内容进行交互，就会从Java的POJO对象通过MyBatis自动转换数据库对应字段的数据类型，具体是该增删改查还是其他操作，都会通过MyBatis进行处理，处理结果是反馈给控制层，然后通过控制层再提交给视图层，反馈到用户希望看到的结果。
## 2.4微信开发者工具
微信开发者工具并不是用来开发微信的一款软件，而是专门用来开发依附于微信的微信小程序和微信公众号的。现如今国内人口差不多14个亿，仅仅微信用户就12个亿之多，基本上覆盖了国内能使用智能手机的所有人群。微信功能相当丰富，可以聊天，视频，移动支付，甚至可以缴各种费用，依靠微信的庞大用户群体，不管是政府机关还是商业公司，都希望借助于微信使用者的庞大用户群体，简化各种支付或者信息推送渠道，让使用微信的人群不用太麻烦就可以完成正常生活的所有操作，极大的方便了人民群众。微信开发者工具就是在聆听到这样的呼唤声而诞生的，为了满足人们的需求，腾讯专门开发出来这个开发工具让其他公司进行使用，并且开放了很多接口以及使用方法，微信开发者工具变得越来越强大。

# 第3章 系统分析
本文作者在确定了研究的课题之后，从各大数字图书馆下载文献来阅读，并了解同类型的网站具备的大致功能，然后具体事务具体分析，得出本系统要研究的具体功能与性能。虽然分析系统这一阶段性工作主要是确定功能，但它却影响着后面系统开发环节的进展，系统分析这个环节是不能少的。
## 3.1 可行性分析
从三个不同的角度来分析，确保开发成功的前提是有可行性分析，只有进行提前分析，符合程序开发流程才不至于开发过程的中断。
### 3.1.1 技术可行性
在技术实现层次，分析了好几种技术实现方法，并且都有对应的成功案例，也有很多开源模块可以进行参考，所以从技术可行性分析来讲，实现教育培训微信小程序是没有问题的。
### 3.1.2 经济可行性
对于身为学生的开发者而言，在经济资源上面可用者很少，为了开发教育培训微信小程序，通过开发软件对硬件的要求，发现自己的电脑是完全能用来开发的，并且学校机房的配置也可以达到要求。最重要的是选择的技术都可以在网上找到不花钱的教程以及资料，因为不花钱，所以经济方面是具有可行性的。
### 3.1.3 操作可行性
教育培训微信小程序的具体实现，本身参考人类的正常操作逻辑，把常用的操作习惯当做主要的导航实现，可以让使用者更快速的理解并且上手操作，实现符合逻辑的操作流程是操作可行性的具体体现。

以上就是从不同的角度来分析，确保了教育培训微信小程序的正常开展。
## 3.2 系统流程
教育培训微信小程序投入使用后，使用者如果能看到相应的流程操作图会提高程序的理解能力。
### 3.2.1 操作流程
使用者在操作教育培训微信小程序中，应该按照本系统提供的操作流程（图3.1即为本系统的操作流程图）进行操作，可以减少操作失误，从而节省进入教育培训微信小程序的时间。

![](/md/blog.001.png)

图3.1 系统操作流程
### 3.2.2 登录流程
教育培训微信小程序通过登录功能（图3.2即为其登录的流程）引导使用者进入指定的功能操作区，也避免非本系统的用户享受本系统提供的服务以及查看本系统提供的信息，进而保证用户安全。

![](/md/blog.002.png)

图3.2 登录流程
### 3.2.3 删除信息流程
教育培训微信小程序在经过长期使用后，会产生很多的数据信息。为了腾出存储空间存放更多的数据，本系统数据库中存储的数据，一些没有参考价值的数据需要进行删除（图3.3即为删除信息的流程），删除数据过程中，为避免误删，使用者要根据系统的提示来决定是否删除数据。

![](/md/blog.003.png)

图3.3 删除信息流程
### 3.2.4 添加信息流程
教育培训微信小程序提供可视化的功能操作区，非常方便使用者进行数据操作，当使用者往系统中录入数据时（图3.4即为添加信息的流程），本系统也会进行数据合法性的判断，符合要求的数据才能够在数据库指定表中进行登记。

![](/md/blog.004.png)

图3.4 添加信息流程
## 3.3 性能需求
需求分析少不了对项目用到的硬件设备进行分析，这样才符合正常的分析流程。只谈功能需求不谈性能需求，是一件很严重的事情，可能会导致一些不可控的问题出现。

以下从这几个角度来分析系统性能。

(1)系统数据的容量：从数据角度来分析，每个表和每个数据库，达到的数据量到一定的程度，是否需要分表或者是分库，超过了数据的设定限度，可能会导致数据反映迟钝，容错量增加。

(2)数据精度的要求：需要对需求分析里面数据设定环节，考虑相应的数据精度问题，需要发现数据是常用的精度还是非常用的精度，进而设定不同的数值。

(3)时间响应要求：从用户提交操作，到页面反映，中间有个数据处理的问题，需要考虑预测数据量的大小，提前预案分库分表的设计，数据量再大就要考虑增加列式数据库的问题，这些都不是一拍脑门就能决定的，都需要经验和同行业的数据分析研判，才能符合用户的要求，毕竟响应时间太久操作起来也不舒服。

(4)普适性问题：用户使用应该不需要感知服务端的数据量问题或者响应问题，只需要任意一台电脑，不需要更多的操作，打开浏览器就能用，太多的设置以及操作，不符合普适性操作。

(5)页面设计问题：功能符合要求之后，肯定是要丰富页面的。页面设计才是用户长时间面对的问题，首先考虑数据的整洁性，让页面看起来更加的清爽。颜色与数据方面，该不同颜色就不同颜色，降低用户长时间使用出现的视觉疲劳，让用户使用起来心情不至于太差。

(6)系统的稳定性：正常用户操作系统页面，必须是该提交提交，正常输入符合逻辑，不能随随便便的就出各种问题，导致用户操作疲惫，并且输入的数据和回显的数据符合用户的要求。如果正常操作都会出现问题，那设计就是不稳定的，这一点肯定不行。只要是与数据进行交互的系统，都必须稳定。系统稳定从开发部署角度上来分析，可以考虑数据的冗余备份功能，自动值守功能，机房数据同步，机房分开的功能，这些都可以让系统的稳定性得到提升。

系统的性能需求需要对业务很熟练的情况下判断然后分析，再从系统性能需求来逐条实现，可以让设计的系统有使用价值。
## 3.4 功能需求
教育培训微信小程序根据使用权限的角度进行功能分析，并运用用例图来展示各个权限需要操作的功能。

图3.5即为管理员用例图，管理员权限操作的功能包括增删改查网课信息，教师信息，学生信息，试卷，试题信息等，管理论坛帖子，管理观看进度信息，管理学生测试信息等。

![](/md/blog.005.png)

图3.5 管理员用例图

图3.6即为教师用例图，教师权限操作的功能包括查看学生对于网课信息的观看进度信息，管理网课信息，管理论坛帖子，管理学生测试试卷和试题，对学生的测试记录和错题信息进行管理等。

![](/md/blog.006.png)

图3.6 教师用例图

图3.7即为学生用例图，学生权限操作的功能包括选择试卷在线答题，查看测试记录和错题信息，播放网课视频，下载网课文件，通过论坛模块进行主题讨论交流。

![](/md/blog.007.png)

图3.7 学生用例图
# 第4章 系统设计
用户对着浏览器操作，肯定会出现某些不可预料的问题，但是不代表着系统对于用户在浏览器上的操作不进行处理，所以说，要提前考虑可能会出现的问题。
## 4.1 功能结构设计
图4.1即为设计的管理员功能结构，管理员权限操作的功能包括增删改查网课信息，教师信息，学生信息，试卷，试题信息等，管理论坛帖子，管理观看进度信息，管理学生测试信息等。

![](/md/blog.008.png)

图4.1 管理员功能结构

图4.2即为设计的教师功能结构，教师权限操作的功能包括查看学生对于网课信息的观看进度信息，管理网课信息，管理论坛帖子，管理学生测试试卷和试题，对学生的测试记录和错题信息进行管理等。

![](/md/blog.009.png)

图4.2 教师功能结构

图4.3即为设计的学生功能结构，学生权限操作的功能包括选择试卷在线答题，查看测试记录和错题信息，播放网课视频，下载网课文件，通过论坛模块进行主题讨论交流。

![](/md/blog.010.png)

图4.3 学生功能结构
## 4.2 数据库设计
教育培训微信小程序运行中产生的数据需要按照提前设置的存储规则进行保存，设计出一个符合项目的最优数据存储格式，因为它能减少用户的等待时间，还可以对系统的请求在最短时间内进行响应。所以，对数据库设计时，需要对功能需求进行详细的拆分，以及对业务状态的细分，然后设计具体的存储规则，保证数据库能正常运作，缩短数据处理时间，并在一定程度上降低数据冗余，节省存储空间。
### 4.2.1 数据库概念设计
实体-联系图还有一个名称即E-R图，是Entity Relationship Diagram各英文单词首字母的缩写，它这种概念模型通常用于对现实世界进行描述。同时它还是一种能够直观表达数据中实体，联系，属性的有效手段。绘制E-R图能够选择的工具也有很多，但是Office Visio 这款软件在E-R图的绘制上一般都是作为首选工具，因为它是基于可视化处理，使用它创建E-R图非常简单。使用基本的E-R图构成元素，比如椭圆，菱形，矩形，还有实线段来表达对应的信息，椭圆代表属性，即实体的特征，矩形代表实体，即数据库中的一个具体数据表，菱形代表实体中相互关系，实线段主要是完成椭圆，矩形，菱形的连接。

（1）图4.4即为教师这个实体所拥有的属性值。

![](/md/blog.011.png)

图4.4 教师实体属性图

（2）图4.5即为网课这个实体所拥有的属性值。

![](/md/blog.012.png)

图4.5 网课实体属性图

（3）图4.6即为学生这个实体所拥有的属性值。

![](/md/blog.013.png)

图4.6 学生实体属性图

4. 图4.7即为试题这个实体所拥有的属性值。

![](/md/blog.014.png)

图4.7 试题实体属性图

4. 图4.8即为上面介绍的实体中存在的联系。

![](/md/blog.015.png)

图4.8 实体间关系E-R图
### 4.2.2 数据库物理设计
本小节主要任务即是根据上述内容进行数据存储结构的设计，实体的属性就用来表示字段名称，不同的字段表示的数据类型以及取值都不相同，以及该表各个字段是否能够保持空等进行说明，设计完成一张数据表的结构之后，在保存时同样要命名，尽量选择英文名称进行命名并保存，还不容易导致系统出错。接下来就对设计的表进行简单说明。

![](/md/blog.016.png "打开新的 phpMyAdmin 窗口")表4.1 课后习题测试表

|字段|注释|类型|空|
| :-: | :-: | :-: | :-: |
|id (主键)|主键|int(11)|否|
|yonghu\_id|提问用户|int(11)|是|
|chat\_issue|问题|varchar(200)|是|
|issue\_time|问题时间 |timestamp|是|
|chat\_reply|回复|varchar(200)|是|
|reply\_time|回复时间 |timestamp|是|
|zhuangtai\_types|状态|int(255)|是|
|chat\_types|数据类型|int(11)|是|
|insert\_time|创建时间|timestamp|是|
表4.2 试卷表

|字段|注释|类型|空|
| :-: | :-: | :-: | :-: |
|id (主键)|主键|int(20)|否|
|exampaper\_name|试卷名称 |varchar(200)|否|
|exampaper\_date|测试时长(分钟)|int(11)|否|
|exampaper\_myscore|试卷总分|int(11)|否|
|jiaoshi\_id|教师|int(11)|是|
|exampaper\_types|试卷状态 |int(11)|否|
|create\_time|创建时间 |timestamp|否|
表4.3 试题表

|字段|注释|类型|空|
| :-: | :-: | :-: | :-: |
|id (主键)|主键|int(20)|否|
|exampaper\_id|所属试卷id（外键）|int(20)|否|
|examquestion\_name|试题名称 |varchar(200)|否|
|examquestion\_options|选项|longtext|是|
|examquestion\_score|分值 |int(20)|是|
|examquestion\_types|试题类型|int(20)|是|
|examquestion\_sequence|试题排序，值越大排越前面|int(20)|是|
|create\_time|创建时间|timestamp|否|
表4.4 测试记录表

|字段|注释|类型|空|
| :-: | :-: | :-: | :-: |
|id (主键)|主键|int(20)|否|
|examrecord\_uuid\_number|测试编号|varchar(200)|是|
|yonghu\_id|测试用户|int(20)|否|
|exampaper\_id|所属试卷id（外键）|int(20)|否|
|total\_score|所得总分|int(200)|是|
|insert\_time|测试时间|timestamp|否|
|create\_time|创建时间|timestamp|否|
表4.5 答题详情表

|字段|注释|类型|空|
| :-: | :-: | :-: | :-: |
|id (主键)|主键|int(20)|否|
|examredetails\_uuid\_number|试卷编号|varchar(200)|是|
|yonghu\_id|用户id|int(20)|否|
|examquestion\_id|试题id（外键）|int(20)|否|
|examredetails\_myanswer|学生答案|varchar(200)|是|
|examredetails\_myscore|试题得分|int(20)|是|
|examination\_name|审核教师|varchar(200)|是|
|examredetails\_types|审核结果|int(20)|是|
|create\_time|创建时间|timestamp|否|
表4.6 错题表

|字段|注释|类型|空|
| :-: | :-: | :-: | :-: |
|id (主键)|主键|int(20)|否|
|yonghu\_id|用户id|int(20)|否|
|exampaper\_id|试卷（外键）|int(20)|否|
|examquestion\_id|试题id（外键）|int(20)|否|
|examredetails\_myanswer|学生作答|varchar(200)|是|
|insert\_time|记录时间|timestamp|否|
|create\_time|创建时间|timestamp|否|
表4.7 论坛表

|字段|注释|类型|空|
| :-: | :-: | :-: | :-: |
|id (主键)|主键|int(11)|否|
|forum\_name|帖子标题 |varchar(200)|是|
|yonghu\_id|用户|int(11)|是|
|jiaoshi\_id|教师|int(11)|是|
|users\_id|管理员|int(11)|是|
|forum\_content|发布内容|text|是|
|super\_ids|父id|int(11)|是|
|forum\_state\_types|帖子状态|int(11)|是|
|insert\_time|发帖时间|timestamp|是|
|update\_time|修改时间|timestamp|是|
|create\_time|创建时间 |timestamp|是|
表4.8 观看进度表

|字段|注释|类型|空|
| :-: | :-: | :-: | :-: |
|id (主键)|主键|int(11)|否|
|kecheng\_id|网课|int(11)|是|
|yonghu\_id|学生|int(11)|是|
|insert\_time|观看时间|timestamp|是|
|create\_time|创建时间|timestamp|是|
表4.9 教师表

|字段|注释|类型|空|
| :-: | :-: | :-: | :-: |
|id (主键)|主键|int(11)|否|
|username|账户|varchar(200)|是|
|password|密码|varchar(200)|是|
|jiaoshi\_name|教师姓名 |varchar(200)|是|
|jiaoshi\_photo|头像|varchar(200)|是|
|jiaoshi\_phone|手机号|varchar(200)|是|
|jiaoshi\_email|电子邮箱|varchar(200)|是|
|sex\_types|性别 |int(11)|是|
|jiaoshi\_delete|假删|int(11)|是|
|create\_time|创建时间|timestamp|是|
表4.10 网课信息表

|字段|注释|类型|空|
| :-: | :-: | :-: | :-: |
|id (主键)|主键|int(11)|否|
|kecheng\_name|网课标题 |varchar(200)|是|
|kecheng\_types|网课类型 |int(11)|是|
|jiaoshi\_id|教师|int(11)|是|
|kecheng\_photo|网课封面|varchar(200)|是|
|kecheng\_video|网课视频|varchar(200)|是|
|kecheng\_file|网课文件|varchar(200)|是|
|kecheng\_content|通知详情|text|是|
|insert\_time|添加时间|timestamp|是|
|create\_time|创建时间|timestamp|是|
表4.11 公告信息表

|字段|注释|类型|空|
| :-: | :-: | :-: | :-: |
|id (主键)|主键|int(11)|否|
|news\_name|公告标题 |varchar(200)|是|
|news\_types|公告类型 |int(11)|是|
|news\_photo|公告图片|varchar(200)|是|
|insert\_time|添加时间|timestamp|是|
|news\_content|公告详情|text|是|
|create\_time|创建时间 |timestamp|是|
表4.12 管理员表

|字段|注释|类型|空|
| :-: | :-: | :-: | :-: |
|id (主键)|主键|bigint(20)|否|
|username|用户名|varchar(100)|否|
|password|密码|varchar(100)|否|
|role|角色|varchar(100)|是|
|addtime|新增时间|timestamp|否|
表4.13 学生表

|字段|注释|类型|空|
| :-: | :-: | :-: | :-: |
|id (主键)|主键|int(11)|否|
|username|账户|varchar(200)|是|
|password|密码|varchar(200)|是|
|yonghu\_name|学生姓名 |varchar(200)|是|
|yonghu\_photo|头像|varchar(200)|是|
|yonghu\_phone|手机号|varchar(200)|是|
|yonghu\_email|电子邮箱|varchar(200)|是|
|sex\_types|性别 |int(11)|是|
|banji\_types|班级 |int(11)|是|
|yonghu\_delete|假删|int(11)|是|
|create\_time|创建时间|timestamp|是|


第5章 系统实现

编程人员在搭建的开发环境中，会让各种编程技术一起呈现出最终效果。本节就展示关键部分的页面效果。
## 5.1 管理员功能实现
### 5.1.1 教师管理
图5.1 即为编码实现的教师管理界面，教师信息包括手机号，教师姓名，教师性别等信息，管理员可以使用修改功能对有错误信息的教师信息进行更正，需要删除的教师信息也能使用删除功能及时删除。

![](/md/blog.017.png)

图5.1 教师管理界面

删除教师：

`    `@RequestMapping("/delete")

`    `public R delete(@RequestBody Integer[] ids){

`        `logger.debug("delete:,,Controller:{},,ids:{}",this.getClass().getName(),ids.toString());

`        `ArrayList<JiaoshiEntity> list = new ArrayList<>();

`        `for(Integer id:ids){

`            `JiaoshiEntity jiaoshiEntity = new JiaoshiEntity();

`            `jiaoshiEntity.setId(id);

`            `jiaoshiEntity.setJiaoshiDelete(2);

`            `list.add(jiaoshiEntity);

`        `}

`        `if(list != null && list.size() >0){

`            `jiaoshiService.updateBatchById(list);

`        `}

`        `return R.ok();

`    `}
### 5.1.2 网课信息管理
图5.2 即为编码实现的网课信息管理界面，网课信息包括网课视频，网课文件，网课标题，网课封面等信息，管理不仅需要上传网课文件，上传网课视频，还可以修改网课信息，可以对需要删除的网课信息进行删除。

![](/md/blog.018.png)

图5.2 网课信息管理界面

删除网课：

`    `@RequestMapping("/delete")

`    `public R delete(@RequestBody Integer[] ids){

`        `logger.debug("delete:,,Controller:{},,ids:{}",this.getClass().getName(),ids.toString());

`        `kechengService.deleteBatchIds(Arrays.asList(ids));

`        `return R.ok();

`    `}
### 5.1.3 学生管理
图5.3 即为编码实现的学生管理界面，学生信息包括性别，班级，手机号等信息，学生信息存在登记错误的情况，管理员则可以使用修改功能及时更正，需要删除的学生信息，管理员也能及时删除。

![](/md/blog.019.png)

图5.3 学生管理界面

删除学生：

`    `@RequestMapping("/delete")

`    `public R delete(@RequestBody Long[] ids){

`        `usersService.deleteBatchIds(Arrays.asList(ids));

`        `return R.ok();

`    `}
## 5.2 教师功能实现
### 5.2.1 观看进度查看
图5.4 即为编码实现的观看进度查看界面，教师可以查看学生对于网课信息的查看进度情况，可以通过学生姓名查询学生对于网课信息的观看进度信息。

![](/md/blog.020.png)

图5.4 观看进度查看界面

查看详情：

@RequestMapping("/info/{id}")

`    `public R info(@PathVariable("id") Long id, HttpServletRequest request){

`        `logger.debug("info方法:,,Controller:{},,id:{}",this.getClass().getName(),id);

`        `GuankanjiluEntity guankanjilu = guankanjiluService.selectById(id);

`        `if(guankanjilu !=null){

`            `//entity转view

`            `GuankanjiluView view = new GuankanjiluView();

`            `BeanUtils.copyProperties( guankanjilu , view );//把实体数据重构到view中

`                `//级联表

`                `KechengEntity kecheng = kechengService.selectById(guankanjilu.getKechengId());

`                `if(kecheng != null){

`                    `BeanUtils.copyProperties( kecheng , view ,new String[]{ "id", "createTime", "insertTime", "updateTime"});//把级联的数据添加到view中,并排除id和创建时间字段

`                    `view.setKechengId(kecheng.getId());

`                `}

`                `//级联表

`                `YonghuEntity yonghu = yonghuService.selectById(guankanjilu.getYonghuId());

`                `if(yonghu != null){

`                    `BeanUtils.copyProperties( yonghu , view ,new String[]{ "id", "createTime", "insertTime", "updateTime"});//把级联的数据添加到view中,并排除id和创建时间字段

`                    `view.setYonghuId(yonghu.getId());

`                `}

`            `//修改对应字典表字段

`            `dictionaryService.dictionaryConvert(view, request);

`            `return R.ok().put("data", view);

`        `}else {

`            `return R.error(511,"查不到数据");

`        `}

`    `}
### 5.2.2 试卷管理
图5.5 即为编码实现的试卷管理界面，教师可以设置试卷状态为启用或禁用试卷状态，可以修改试卷考试时长信息，以及修改试卷总分信息等，教师也能新增试卷，对之前新增的已经无效的试卷信息及时删除。

![](/md/blog.021.png)

图5.5 试卷管理界面

添加试卷：

`    `@RequestMapping("/save")

`    `public R save(@RequestBody ExampaperEntity exampaper, HttpServletRequest request){

`        `logger.debug("save方法:,,Controller:{},,exampaper:{}",this.getClass().getName(),exampaper.toString());

`        `String role = String.valueOf(request.getSession().getAttribute("role"));

`        `if(false)

`            `return R.error(511,"永远不会进入");

`        `else if("教师".equals(role))

`            `exampaper.setJiaoshiId(Integer.valueOf(String.valueOf(request.getSession().getAttribute("userId"))));

`        `Wrapper<ExampaperEntity> queryWrapper = new EntityWrapper<ExampaperEntity>()

`            `.eq("exampaper\_name", exampaper.getExampaperName())

`            `.eq("exampaper\_date", exampaper.getExampaperDate())

`            `.eq("exampaper\_myscore", exampaper.getExampaperMyscore())

`            `.eq("jiaoshi\_id", exampaper.getJiaoshiId())

`            `.eq("exampaper\_types", exampaper.getExampaperTypes())

`            `;

`        `logger.info("sql语句:"+queryWrapper.getSqlSegment());

`        `ExampaperEntity exampaperEntity = exampaperService.selectOne(queryWrapper);

`        `if(exampaperEntity==null){

`            `exampaper.setCreateTime(new Date());

`            `exampaperService.insert(exampaper);

`            `return R.ok();

`        `}else {

`            `return R.error(511,"表中有相同数据");

`        `}

`    `}
### 5.2.3 试题管理
图5.6 即为编码实现的试题管理界面，所有试卷都是由许多试题组成的，因此教师在组装试卷之前，先要对试题进行添加，以及及时更正登记有错误信息的试题信息，对于不需要的试题信息进行及时删除。

![](/md/blog.022.png)

图5.6 试题管理界面

添加试题：

` `@RequestMapping("/save")

`    `public R save(@RequestBody ExamquestionEntity examquestion, HttpServletRequest request){

`        `logger.debug("save方法:,,Controller:{},,examquestion:{}",this.getClass().getName(),examquestion.toString());

`        `String role = String.valueOf(request.getSession().getAttribute("role"));

`        `if(false)

`            `return R.error(511,"永远不会进入");

`        `Wrapper<ExamquestionEntity> queryWrapper = new EntityWrapper<ExamquestionEntity>()

`            `.eq("exampaper\_id", examquestion.getExampaperId())

`            `.eq("examquestion\_name", examquestion.getExamquestionName())

`            `.eq("examquestion\_options", examquestion.getExamquestionOptions())

`            `.eq("examquestion\_score", examquestion.getExamquestionScore())

`            `.eq("examquestion\_types", examquestion.getExamquestionTypes())

`            `.eq("examquestion\_sequence", examquestion.getExamquestionSequence())

`            `;

`        `logger.info("sql语句:"+queryWrapper.getSqlSegment());

`        `ExamquestionEntity examquestionEntity = examquestionService.selectOne(queryWrapper);

`        `if(examquestionEntity==null){

`            `examquestion.setCreateTime(new Date());

`            `examquestionService.insert(examquestion);

`            `return R.ok();

`        `}else {

`            `return R.error(511,"表中有相同数据");

`        `}

`    `}
## 5.3 学生功能实现
### 5.3.1 在线答题
图5.7 即为编码实现的在线答题界面，学生在试卷模块对需要答题的试卷进行答题，答题过程中不仅需要回答试题问题，还需要在试卷规定时间内提交答卷。

![](/md/blog.023.png)

图5.7 在线答题界面
### 5.3.2 网课信息
图5.8 即为编码实现的网课信息界面，学生在网课信息界面中可以通过播放网课视频的方式进行学习，同时，该网课信息界面也展示了网课文件，学生可以下载网课文件。

![](/md/blog.024.png)

图5.8 网课信息界面
### 5.3.3 我的发帖
图5.9 即为编码实现的我的发帖界面，学生在我的发帖界面中可以发布帖子，该界面展示的帖子都是学生自己发布的帖子，因此支持学生对帖子进行更改，删除。同时学生也能跟踪已发布的帖子，比如查看帖子的评论，学生也能回复帖子等。

![](/md/blog.025.png)

图5.9 我的发帖界面

发帖：

`    `@RequestMapping("/add")

`    `public R add(@RequestBody ForumEntity forum, HttpServletRequest request){

`        `logger.debug("add方法:,,Controller:{},,forum:{}",this.getClass().getName(),forum.toString());

`        `Wrapper<ForumEntity> queryWrapper = new EntityWrapper<ForumEntity>()

`            `.eq("forum\_name", forum.getForumName())

`            `.eq("yonghu\_id", forum.getYonghuId())

`            `.eq("jiaoshi\_id", forum.getJiaoshiId())

`            `.eq("users\_id", forum.getUsersId())

`            `.eq("super\_ids", forum.getSuperIds())

`            `.eq("forum\_state\_types", forum.getForumStateTypes())

`            `;

`        `logger.info("sql语句:"+queryWrapper.getSqlSegment());

`        `ForumEntity forumEntity = forumService.selectOne(queryWrapper);

`        `if(forumEntity==null){

`            `forum.setInsertTime(new Date());

`            `forum.setCreateTime(new Date());

`        `forumService.insert(forum);

`            `return R.ok();

`        `}else {

`            `return R.error(511,"表中有相同数据");

`        `}

`    `}
### 5.3.4 测试记录
图5.10 即为编码实现的测试记录界面，测试记录界面展示的信息都是学生对试卷答题产生的信息，学生不仅可以查看试卷答题的详细信息，包括试卷每道题的得分信息，以及学生对试题提交的答案信息等，除此以外，学生也能查看试卷的总体得分信息。

![](/md/blog.026.png)

图5.10 测试记录界面


# 










