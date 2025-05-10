export default function Flex({ children, className }) {
    return (
      <div className={`flex items-center ${className}`}>{children}</div>
    );
  }
<Flex className="bg-blue-600 text-blue-100">
  <span>Child tag one</span>
  <span>Child tag two</span>
  <span>Child tag three</span>
</Flex>
