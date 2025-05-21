// app/layout.js
import "./globals.css";
import { BookingProvider } from "./context/BookingContext";
import LeftMenuBar from "./components/LeftMenuBar";
import MenuBar from "./components/MenuBr";
import ActivityDashboard from "./components/ActivityDashboard";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BookingProvider>
          
          <div className="md:grid grid-cols-[1fr_6fr] p-2 md:p-0">
            <LeftMenuBar />

            <div>
              <MenuBar />
              
              {children}
              </div>
          </div>
        </BookingProvider>
      </body>
    </html>
  );
}
