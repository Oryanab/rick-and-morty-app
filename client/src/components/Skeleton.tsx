import React from "react";
import styled from "styled-components";

const SkeletonWrapper = styled.div`
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const SkeletonLine = styled.div<{ width?: string }>`
  height: 20px;
  width: ${(props) => (props.width ? props.width : "100%")};
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const SkeletonComponent = () => {
  return (
    <div>
      <SkeletonWrapper>
        <SkeletonLine width="200px" />
      </SkeletonWrapper>
      <SkeletonWrapper>
        <SkeletonLine width="300px" />
      </SkeletonWrapper>
      <SkeletonWrapper>
        <SkeletonLine />
        <SkeletonLine />
        <SkeletonLine />
      </SkeletonWrapper>
    </div>
  );
};

export default SkeletonComponent;
