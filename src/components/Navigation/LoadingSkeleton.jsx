import React from 'react';

export default function LoadingSkeleton() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-header">
        <div className="skeleton-title pulse"></div>
        <div className="skeleton-subtitle pulse"></div>
      </div>
      <div className="skeleton-body">
        <div className="skeleton-paragraph pulse"></div>
        <div className="skeleton-paragraph pulse" style={{ width: '80%' }}></div>
        <div className="skeleton-paragraph pulse" style={{ width: '90%' }}></div>
        <div className="skeleton-box pulse"></div>
        <div className="skeleton-paragraph pulse"></div>
        <div className="skeleton-paragraph pulse" style={{ width: '60%' }}></div>
      </div>
    </div>
  );
}
