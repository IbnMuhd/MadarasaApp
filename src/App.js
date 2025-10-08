import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, FileText, Users, Book, Menu, X, ChevronRight, Star, MapPin, Phone, Mail, Search, GraduationCap, BookText } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const mustawat = [
    { id: 1, name: 'المستوى الأول', classes: ['روضة الطلاب', 'فصل الأول', 'فصل الثاني'] },
    { id: 2, name: 'المستوى الثاني', classes: ['فصل الثالث', 'فصل الرابع'] },
    { id: 3, name: 'المستوى الثالث', classes: ['فصل الخامس', 'فصل السادس'] },
    { id: 4, name: 'المستوى الرابع', classes: [] },
  ];

  const subjects = [
    { id: 1, name: 'القرآن الكريم', mustawa: 'المستوى الأول', class: 'روضة الطلاب' },
    { id: 2, name: 'الحديث', mustawa: 'المستوى الأول', class: 'روضة الطلاب' },
    { id: 3, name: 'التوحيد', mustawa: 'المستوى الأول', class: 'روضة الطلاب' },
    { id: 4, name: 'ال	fiqh', mustawa: 'المستوى الأول', class: 'روضة الطلاب' },
    { id: 5, name: 'التجويد', mustawa: 'المستوى الأول', class: 'روضة الطلاب' },
    { id: 6, name: 'العربية', mustawa: 'المستوى الأول', class: 'روضة الطلاب' },
    { id: 7, name: 'السيرة', mustawa: 'المستوى الأول', class: 'روضة الطلاب' },
    { id: 8, name: 'الحروف', mustawa: 'المستوى الأول', class: 'روضة الطلاب' },
    { id: 9, name: 'الأذكار', mustawa: 'المستوى الأول', class: 'روضة الطلاب' },
  ];

  const handouts = [
    { id: 1, title: ' surah Al-Fatiha', subject: 'القرآن الكريم', mustawa: 'المستوى الأول', class: 'روضة الطلاب', term: 'الفترة الأولى' },
    { id: 2, title: 'Hadith about Prayer', subject: 'الحديث', mustawa: 'المستوى الأول', class: 'فصل الأول', term: 'الفترة الأولى' },
    { id: 3, title: 'Tawhid Basics', subject: 'التوحيد', mustawa: 'المستوى الأول', class: 'فصل الثاني', term: 'الفترة الأولى' },
    { id: 4, title: 'Fiqh of Wudu', subject: 'ال	fiqh', mustawa: 'المستوى الأول', class: 'فصل الأول', term: 'الفترة الثانية' },
    { id: 5, title: 'Rules of Tajweed', subject: 'التجويد', mustawa: 'المستوى الأول', class: 'فصل الأول', term: 'الفترة الأولى' },
    { id: 6, title: 'Arabic Alphabets', subject: 'العربية', mustawa: 'المستوى الأول', class: 'فصل الأول', term: 'الفترة الأولى' },
    { id: 7, title: 'Life of Prophet', subject: 'السيرة', mustawa: 'المستوى الأول', class: 'فصل الأول', term: 'الفترة الثانية' },
    { id: 8, title: 'Arabic Letters', subject: 'الحروف', mustawa: 'المستوى الأول', class: 'روضة الطلاب', term: 'الفترة الأولى' },
    { id: 9, title: 'Morning Adhkar', subject: 'الأذكار', mustawa: 'المستوى الأول', class: 'فصل الأول', term: 'الفترة الأولى' },
  ];

  const curriculum = [
    { id: 1, name: 'Quran Studies', description: 'Complete Quran memorization and understanding', duration: '6 years' },
    { id: 2, name: 'Hadith Studies', description: 'Study of authentic Hadith collections', duration: '4 years' },
    { id: 3, name: 'Tawhid Studies', description: 'Understanding of Islamic monotheism', duration: '6 years' },
    { id: 4, name: 'Fiqh Studies', description: 'Understanding of Islamic jurisprudence', duration: '6 years' },
    { id: 5, name: 'Tajweed Studies', description: 'Rules of Quranic recitation', duration: '6 years' },
    { id: 6, name: 'Arabic Language', description: 'Classical Arabic grammar and literature', duration: '3 years' },
    { id: 7, name: 'Islamic History', description: 'Life of Prophet and Islamic history', duration: '6 years' },
    { id: 8, name: 'Arabic Grammar', description: 'Noun and verb cases', duration: '6 years' },
    { id: 9, name: 'Islamic Supplications', description: 'Daily prayers and remembrances', duration: '6 years' },
  ];

  const terms = [
    { id: 1, name: 'الفترة الأولى', start: 'September 2023', end: 'December 2023' },
    { id: 2, name: 'الفترة الثانية', start: 'January 2024', end: 'April 2024' },
    { id: 3, name: 'الفترة الثالثة', start: 'May 2024', end: 'August 2024' },
  ];

  const books = [
    { id: 1, title: 'Quran with Translation', subject: 'القرآن الكريم', mustawa: 'All Levels', author: 'Various' },
    { id: 2, title: 'Sahih Bukhari Hadith', subject: 'الحديث', mustawa: 'All Levels', author: 'Imam Bukhari' },
    { id: 3, title: 'Tawhid Book', subject: 'التوحيد', mustawa: 'All Levels', author: 'Sheikh Uthaymeen' },
    { id: 4, title: 'Fiqh Made Easy', subject: 'ال	fiqh', mustawa: 'All Levels', author: 'Sayyid Sabiq' },
    { id: 5, title: 'Tajweed Rules', subject: 'التجويد', mustawa: 'All Levels', author: 'Dr. Ayman' },
    { id: 6, title: 'Arabic for Beginners', subject: 'العربية', mustawa: 'المستوى الأول', author: 'Dr. Ahmed' },
    { id: 7, title: 'Prophet\'s Biography', subject: 'السيرة', mustawa: 'All Levels', author: 'Ibn Hisham' },
    { id: 8, title: 'Arabic Letters', subject: 'الحروف', mustawa: 'روضة الطلاب', author: 'Dr. Fatima' },
    { id: 9, title: 'Daily Adhkar', subject: 'الأذكار', mustawa: 'All Levels', author: 'Sheikh Albani' },
  ];

  const NavItem = ({ icon: Icon, label, tab }) => (
    <button
      onClick={() => {
        setActiveTab(tab);
        setIsMenuOpen(false);
      }}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
        activeTab === tab
          ? 'bg-green-600 text-white'
          : 'text-gray-700 hover:bg-green-100'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  const Dashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">مستوات</p>
              <p className="text-2xl font-bold text-gray-800">4</p>
            </div>
            <GraduationCap className="text-green-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">مآدة</p>
              <p className="text-2xl font-bold text-gray-800">9</p>
            </div>
            <BookText className="text-blue-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">الفترات</p>
              <p className="text-2xl font-bold text-gray-800">3</p>
            </div>
            <Calendar className="text-purple-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Books</p>
              <p className="text-2xl font-bold text-gray-800">9</p>
            </div>
            <Book className="text-orange-500" size={32} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">المستوات و الفصول</h3>
          <div className="space-y-3">
            {mustawat.map(level => (
              <div key={level.id} className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-800">{level.name}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {level.classes.length > 0 ? (
                    level.classes.map((cls, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                        {cls}
                      </span>
                    ))
                  ) : (
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                      مستوى بدون فصول
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">المآدة التسعة</h3>
          <div className="grid grid-cols-2 gap-3">
            {subjects.map((subject, idx) => (
              <div key={idx} className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="font-medium text-blue-800">{subject.name}</p>
              </div>
            ))}
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-4">Coming Soon</h3>
          <div className="p-4 bg-yellow-50 rounded-lg text-center">
            <p className="text-yellow-800 font-medium">قريباً</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Handouts = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">مذكرات الدراسة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {handouts.map(handout => (
            <div key={handout.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-800">{handout.title}</h3>
                <Star size={16} className="text-yellow-500" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600"><span className="font-medium">مآدة:</span> {handout.subject}</p>
                <p className="text-sm text-gray-600"><span className="font-medium">مستوى:</span> {handout.mustawa}</p>
                <p className="text-sm text-gray-600"><span className="font-medium">فصل:</span> {handout.class}</p>
                <p className="text-sm text-gray-600"><span className="font-medium">الفترة:</span> {handout.term}</p>
              </div>
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                تحميل PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Curriculum = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">جدول الدراسة - مادة الحديث</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-right">المستوى والفصل</th>
                <th className="py-3 px-4 border-b text-right">إلى</th>
                <th className="py-3 px-4 border-b text-right">من</th>
                <th className="py-3 px-4 border-b text-right">الفترة</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="3" className="py-3 px-4 border-b text-right align-top">المستوى الأولى: فصل الأول</td>
                <td className="py-3 px-4 border-b text-right">الحديث 11</td>
                <td className="py-3 px-4 border-b text-right">الحديث 1</td>
                <td className="py-3 px-4 border-b text-right">الفترة الأولى</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b text-right">الحديث 22</td>
                <td className="py-3 px-4 border-b text-right">الحديث 12</td>
                <td className="py-3 px-4 border-b text-right">الفترة الثانية</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b text-right">الحديث 29</td>
                <td className="py-3 px-4 border-b text-right">الحديث 23</td>
                <td className="py-3 px-4 border-b text-right">الفترة الثالثة</td>
              </tr>
              
              <tr>
                <td rowSpan="3" className="py-3 px-4 border-b text-right align-top">المستوى الأولى: فصل الثاني</td>
                <td className="py-3 px-4 border-b text-right">الحديث 36</td>
                <td className="py-3 px-4 border-b text-right">الحديث 30</td>
                <td className="py-3 px-4 border-b text-right">الفترة الأولى</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b text-right">الحديث 44</td>
                <td className="py-3 px-4 border-b text-right">الحديث 37</td>
                <td className="py-3 px-4 border-b text-right">الفترة الثانية</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b text-right">الحديث 53</td>
                <td className="py-3 px-4 border-b text-right">الحديث 45</td>
                <td className="py-3 px-4 border-b text-right">الفترة الثالثة</td>
              </tr>
              
              <tr>
                <td rowSpan="3" className="py-3 px-4 border-b text-right align-top">المستوى الثانية: فصل الثالث</td>
                <td className="py-3 px-4 border-b text-right">الحديث 64</td>
                <td className="py-3 px-4 border-b text-right">الحديث 54</td>
                <td className="py-3 px-4 border-b text-right">الفترة الأولى</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b text-right">الحديث 75</td>
                <td className="py-3 px-4 border-b text-right">الحديث 65</td>
                <td className="py-3 px-4 border-b text-right">الفترة الثانية</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b text-right">الحديث 85</td>
                <td className="py-3 px-4 border-b text-right">الحديث 76</td>
                <td className="py-3 px-4 border-b text-right">الفترة الثالثة</td>
              </tr>
              
              <tr>
                <td rowSpan="3" className="py-3 px-4 border-b text-right align-top">المستوى الثانية: فصل الرابع</td>
                <td className="py-3 px-4 border-b text-right">الحديث 98</td>
                <td className="py-3 px-4 border-b text-right">الحديث 86</td>
                <td className="py-3 px-4 border-b text-right">الفترة الأولى</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b text-right">الحديث 110</td>
                <td className="py-3 px-4 border-b text-right">الحديث 99</td>
                <td className="py-3 px-4 border-b text-right">الفترة الثانية</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b text-right">الحديث 120</td>
                <td className="py-3 px-4 border-b text-right">الحديث 111</td>
                <td className="py-3 px-4 border-b text-right">الفترة الثالثة</td>
              </tr>
              
              <tr>
                <td rowSpan="3" className="py-3 px-4 border-b text-right align-top">المستوى الثالثة: فصل الخامس</td>
                <td className="py-3 px-4 border-b text-right">باب في المبادرة إلي الخيرات</td>
                <td className="py-3 px-4 border-b text-right">باب في الإخلاص</td>
                <td className="py-3 px-4 border-b text-right">الفترة الأولى</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b text-right">باب الوصية بالنساء</td>
                <td className="py-3 px-4 border-b text-right">باب في المجاهدة</td>
                <td className="py-3 px-4 border-b text-right">الفترة الثانية</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b text-right">باب فضل الزهد في الدنيا</td>
                <td className="py-3 px-4 border-b text-right">باب حق الزوج على المرأة</td>
                <td className="py-3 px-4 border-b text-right">الفترة الثالثة</td>
              </tr>
              
              <tr>
                <td rowSpan="3" className="py-3 px-4 text-right align-top">المستوى الثالثة: فصل السادس</td>
                <td className="py-3 px-4 text-right">( باب الغضب إذا انتهكات حرمات الشرع )</td>
                <td className="py-3 px-4 text-right">باب فضل الزهد في الدنيا</td>
                <td className="py-3 px-4 text-right">الفترة الأولى</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-right">( باب تحريم النكاح الشاعر وبطلانه )</td>
                <td className="py-3 px-4 text-right">( باب أمر ولاة الأمور بالرفق برعايتهم )</td>
                <td className="py-3 px-4 text-right">الفترة الثانية</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-right">(عمدة الأحكام)</td>
                <td className="py-3 px-4 text-right">( باب ندب النظر إلى وجه المرأة وكفيها )</td>
                <td className="py-3 px-4 text-right">الفترة الثالثة</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const Calendar = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">تقويم الدراسة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {terms.map(term => (
            <div key={term.id} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{term.name}</h3>
              <div className="space-y-2">
                <p className="text-gray-600"><span className="font-medium">Start:</span> {term.start}</p>
                <p className="text-gray-600"><span className="font-medium">End:</span> {term.end}</p>
              </div>
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                عرض الجدول
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Timetable = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">جدول الأسبوع</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-3 px-4">Saturday & Sunday</th>
                <th className="text-left py-3 px-4">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Islamiyyah Session Begins</td>
                <td className="py-3 px-4">08:45am to 10:00am</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Quran Recitation Teaching (Individually)</td>
                <td className="py-3 px-4">08:45am to 10:00am</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Break</td>
                <td className="py-3 px-4">10:00am to 10:15am</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Quran Recitation Teaching (Class by Class)</td>
                <td className="py-3 px-4">10:15am to 11:00am</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Azkaar (On Sundays)</td>
                <td className="py-3 px-4">10:15am to 11:00am</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Islamiyyah Morning Session Ends</td>
                <td className="py-3 px-4">11:00am</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Quran Memorization Session (Optional)</td>
                <td className="py-3 px-4">11:00am to 03:00pm</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Quran Recitation Teaching (Individually)</td>
                <td className="py-3 px-4">03:00pm to Asr Prayer Time</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">First Period</td>
                <td className="py-3 px-4">04:30pm to 05:00pm</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Second Period</td>
                <td className="py-3 px-4">05:00pm to 05:30pm</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">School Ends</td>
                <td className="py-3 px-4">05:30pm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-3 px-4">Monday & Tuesday</th>
                <th className="text-left py-3 px-4">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Islamiyyah Session Begins</td>
                <td className="py-3 px-4">03:00pm to Asr Prayer Time</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Quran Recitation Teaching (Individually)</td>
                <td className="py-3 px-4">03:00pm to Asr Prayer Time</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">First Period</td>
                <td className="py-3 px-4">04:30pm to 05:00pm</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Second Period</td>
                <td className="py-3 px-4">05:00pm to 05:30pm</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">School Ends</td>
                <td className="py-3 px-4">05:30pm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-3 px-4">Wednesday</th>
                <th className="text-left py-3 px-4">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Islamiyyah Session Begins</td>
                <td className="py-3 px-4">03:00pm to Asr Prayer Time</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Quran Recitation Teaching (Individually)</td>
                <td className="py-3 px-4">03:00pm to Asr Prayer Time</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Weekly Sermon/Presentation/Awareness Campaign/Entertainment/Competitions</td>
                <td className="py-3 px-4">04:30pm to 05:30pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const Organogram = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Coming Soon</h2>
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 font-medium">Coming Soon</p>
          <p className="text-gray-500 mt-2">قريباً</p>
        </div>
      </div>
    </div>
  );

  const Books = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">الكتب المرجعية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map(book => (
            <div key={book.id} className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-1">by {book.author}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{book.subject}</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{book.mustawa}</span>
              </div>
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                عرض التفاصيل
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'handouts': return <Handouts />;
      case 'curriculum': return <Curriculum />;
      case 'calendar': return <Calendar />;
      case 'timetable': return <Timetable />;
      case 'organogram': return <Organogram />;
      case 'books': return <Books />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="bg-green-600 text-white p-2 rounded-lg">
                <BookOpen size={24} />
              </div>
              <h1 className="ml-3 text-xl font-bold text-gray-800">مدرسة تربية الطلاب وتعليم القرآن</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className={`lg:w-64 ${isMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-md p-4 sticky top-6">
              <nav className="space-y-2">
                <NavItem icon={BookOpen} label="Dashboard" tab="dashboard" />
                <NavItem icon={FileText} label="مذكرات" tab="handouts" />
                <NavItem icon={Book} label="جدول" tab="curriculum" />
                <NavItem icon={Calendar} label="تقويم" tab="calendar" />
                <NavItem icon={Clock} label="جدول الحصص" tab="timetable" />
                <NavItem icon={Users} label="الهيكل التنظيمي" tab="organogram" />
                <NavItem icon={Book} label="الكتب" tab="books" />
              </nav>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Contact Information</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>123 Islamic Education St, Madina</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={16} className="mr-2" />
                    <span>+966 123 456 7890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={16} className="mr-2" />
                    <span>info@tareeb-al-tulab.edu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
