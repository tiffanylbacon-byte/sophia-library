export function useMDXComponents(components: any = {}) {
  return {
    h2: (props: any) => <h2 className="mt-8 text-xl font-semibold" {...props} />,
    p:  (props: any) => <p className="mt-4 leading-7 text-neutral-700" {...props} />,
    ul: (props: any) => <ul className="ml-5 list-disc space-y-2" {...props} />,
    ...components,
  };
}
