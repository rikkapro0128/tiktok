import Header from '@/components/Header';

function DefaultLayout({ children }) {
  return (
    <div className="conntainer">
      <Header />
      <div className="wrap">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
