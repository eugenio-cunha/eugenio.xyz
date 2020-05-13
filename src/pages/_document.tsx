import * as React from 'react';
import Document from 'next/document';

export default class Doc extends Document {
  public static async getInitialProps(ctx: any) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: JSX.IntrinsicAttributes) => <App {...props} />
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (<>{initialProps.styles}</>
      )
    };
  }
}
