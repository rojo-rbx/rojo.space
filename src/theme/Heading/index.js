import Heading from '@theme-original/Heading';

export default function HeadingWrapper(props) {
  const handleClick = async (e) => {
    const target = e.target;

    if (target.classList.contains('hash-link')) {

      const href = target.getAttribute('href');
      if (!href) return;

      const url = `${window.location.origin}${window.location.pathname}${href}`;

      try {
        await navigator.clipboard.writeText(url);
      } catch (err) {
        console.error('Clipboard copy failed', err);
      }
    }
  };

  return (
    <div onClick={handleClick}>
      <Heading {...props} />
    </div>
  );
}