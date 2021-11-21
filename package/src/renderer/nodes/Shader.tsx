import type { RuntimeEffect } from "canvaskit-wasm";
import type { ReactNode, RefObject } from "react";

import { NodeType, processChildren } from "../Host";
import type { SkNode } from "../Host";

export interface ShaderProps {
  rt: RefObject<RuntimeEffect>;
  uniforms: Float32Array | number[];
  children?: ReactNode | ReactNode[];
}

export const Shader = (props: ShaderProps) => {
  return <skShader {...props} />;
};

Shader.defaultProps = {
  uniforms: [],
};

export const ShaderNode = (props: ShaderProps): SkNode<NodeType.Shader> => ({
  type: NodeType.Shader,
  props,
  draw: (ctx, { uniforms, rt }, children) => {
    if (rt.current) {
      const { paint } = ctx;
      const shaderChildren = processChildren(ctx, children);
      const shader = rt.current.makeShaderWithChildren(
        uniforms,
        true,
        shaderChildren
      );
      paint.setShader(shader);
      return shader;
    }
    return;
  },
  children: [],
  memoizable: true,
});
