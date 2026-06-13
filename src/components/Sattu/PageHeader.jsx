import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PageHeader = ({ title, subtitle, image, backUrl, breadcrumbItems = [] }) => {
  return (
    <section className="relative pt-40 pb-20 bg-[#FBF9F6] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#0A1E13_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-16 relative z-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0A1E13]/40">
              {backUrl && (
                <Link
                  to={backUrl}
                  className="flex items-center gap-2 hover:text-[#0A1E13] transition-colors"
                >
                  <ArrowLeft size={14} />
                  Back
                </Link>
              )}
              {breadcrumbItems.length > 0 && (
                <>
                  {backUrl && <span className="text-[#0A1E13]/20">/</span>}
                  {breadcrumbItems.map((item, index) => (
                    <React.Fragment key={index}>
                      {item.path ? (
                        <Link
                          to={item.path}
                          className="hover:text-[#0A1E13] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-[#0A1E13]">{item.label}</span>
                      )}
                      {index < breadcrumbItems.length - 1 && (
                        <span className="text-[#0A1E13]/20">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </>
              )}
            </div>
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-4 bg-[#D4B27A]" />
              <span className="text-[#D4B27A] text-[10px] font-bold uppercase tracking-[0.4em]">
                Nativa Organics
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              {subtitle && (
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4B27A]">
                  {subtitle}
                </p>
              )}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-[#0A1E13] leading-tight tracking-tight">
                {title}
              </h1>
            </div>

            {image && (
              <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden border border-[#0A1E13]/10 shadow-xl shadow-[#0A1E13]/5 flex-shrink-0">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
