import React, { useState, useEffect, useRef } from "react";
import "./graphicContent.less";
import new_blockshow1_2x from "../../../../assets/new_blockshow1_2x.jpg";
import new_blockshow2_2x from "../../../../assets/new_blockshow2_2x.jpg";
import new_blockshow3_2x from "../../../../assets/new_blockshow3_2x.jpg";
import new_blockshow1_2x_min from "../../../../assets/new_blockshow1_2x_min.jpg";
import new_blockshow2_2x_min from "../../../../assets/new_blockshow2_2x_min.jpg";
import new_blockshow3_2x_min from "../../../../assets/new_blockshow3_2x_min.jpg";
import OptimizedImage from "../../../../components/OptimizedImage";

const data = [
  {
    image: new_blockshow1_2x,
    minImage: new_blockshow1_2x_min,
    title: "工程与建设服务",
    length: 3,
    texts: [
      {
        pageIndex: undefined,
        content: undefined,
      },
      {
        pageIndex: 1,
        content: `大型工业设施建设：从概念设计到最终交付，我们的团队精心策划每一个细节。无论是化工工厂、制造基地还是高科技产业园，我们运用先进的工程技术和现代化建筑材料，确保设施不仅满足生产需求，还具备高效、环保和安全的特性。`,
      },
      {
        pageIndex: 2,
        content: `复杂基础设施项目：在能源领域，我们拥有卓越的项目执行能力。例如，我们承接了某大型聚乙烯裂解的石化项目，需要克服恶劣的低温环境和紧张的交付周期。`,
      },
      {
        pageIndex: 3,
        content: `一站式项目管理：我们提供全方位的项目管理服务，涵盖项目规划、进度控制、成本管理和质量监督等各个方面。通过先进的项目管理工具和方法，确保项目按时、按预算完成，并达到最高质量标准。`,
      },
    ],
  },
  {
    image: new_blockshow2_2x,
    minImage: new_blockshow2_2x_min,
    title: "供应链优化与管理",
    length: 2,
    texts: [
      {
        pageIndex: 1,
        content: `全球采购网络：我们拥有广泛稳定的全球供应商资源，从而为客户提供高质量、低成本的原材料和零部件采购服务。通过严格的供应商评估和采购流程优化，确保供应的稳定性和产品质量的一致性，同时有效降低采购成本。`,
      },
      {
        pageIndex: 2,
        content: `智能物流与配送：提供端到端的物流解决方案，包括国际货运代理、仓储管理优化，确保货物安全、快速、准确地送达全球各地客户手中。`,
      },
    ],
  },
  {
    image: new_blockshow3_2x,
    minImage: new_blockshow3_2x_min,
    title: "环境可持续发展服务",
    length: 1,
    texts: [
      {
        pageIndex: 1,
        content: `环境评估与规划：我们帮助企业在项目实施过程中充分考虑环境因素，制定有效的环境保护措施，确保项目符合国际环保标准和当地法规要求。`,
      },
    ],
  },
];

const GraphicContent = ({ t }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  const SCROLL_THRESHOLD = 1000; // 滚动阈值

  const handleScroll = () => {
    const newScrollY = window.scrollY;

    // 计算累计滚动距离
    const scrollDelta = newScrollY - scrollOffset;

    if (Math.abs(scrollDelta) >= SCROLL_THRESHOLD) {
      if (scrollDelta > 0) {
        // 向下滚动
        if (currentTextIndex < data[currentImageIndex].texts.length - 1) {
          // 切换到下一段文字
          setCurrentTextIndex(currentTextIndex + 1);
        } else if (currentImageIndex < data.length - 1) {
          // 切换到下一张图片（如果不是最后一张）
          setCurrentImageIndex(currentImageIndex + 1);
          setCurrentTextIndex(0);
        }
      } else {
        // 向上滚动
        if (currentTextIndex > 0) {
          // 切换到上一段文字
          setCurrentTextIndex(currentTextIndex - 1);
        } else if (currentImageIndex > 0) {
          // 切换到上一张图片
          setCurrentImageIndex(currentImageIndex - 1);
          setCurrentTextIndex(data[currentImageIndex - 1].texts.length - 1);
        }
      }
      setScrollOffset(newScrollY); // 更新滚动偏移
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollOffset, currentTextIndex, currentImageIndex]);

  return (
    <div className="graphicContent">
      <div className="background-container">
        {data.map((section, index) => (
          <OptimizedImage
            className={`background-image ${
              index === currentImageIndex ? "visible" : ""
            }`}
            lowResSrc={section.minImage} // 压缩图片路径
            highResSrc={section.image} // 高清图片路径
            alt={`Background ${index}`}
          />
        ))}
      </div>
      <div className="text-container">
        {/* 标题只显示一次 */}
        {data[currentImageIndex].title && (
          <h2 className="title">{t(`${data[currentImageIndex].title}`)}</h2>
        )}
        {/* 动态切换文字内容 */}
        {data[currentImageIndex].texts[currentTextIndex].content ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <p key={currentTextIndex} className="text">
              <div
                style={{
                  fontWeight: "bold",
                  marginRight: "15px",
                  marginBottom: "10px",
                }}
              >
                &nbsp;&nbsp; &nbsp;&nbsp;
                {t(
                  `${data[currentImageIndex].title}_${currentTextIndex}_title`
                )}
              </div>
              <span style={{ wordBreak: "break-all" }}>
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                {t(`${data[currentImageIndex].title}_${currentTextIndex}`)}
              </span>
            </p>
            {data[currentImageIndex].length && (
              <div>
                {data[currentImageIndex].texts[currentTextIndex].pageIndex ? (
                  <div
                    style={{
                      margin: "0 2vw",
                      width: "3vw",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{ color: "red", borderBottom: "1px solid #fff" }}
                    >
                      {
                        data[currentImageIndex].texts[currentTextIndex]
                          .pageIndex
                      }
                    </div>
                    <div>{data[currentImageIndex].length}</div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GraphicContent;
