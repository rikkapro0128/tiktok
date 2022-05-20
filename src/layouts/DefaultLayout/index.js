import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

function DefaultLayout({ children }) {
  return (
    <div className='conntainer'>
      <Header />
      <div className="wrap">
        <Sidebar />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;