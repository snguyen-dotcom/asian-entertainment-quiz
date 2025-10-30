# Asian Entertainment Quiz App

A comprehensive web-based quiz application focused on Asian entertainment including K-pop, J-pop, C-pop, Asian dramas, movies, and anime.

## Features

### 🎯 **User Management**
- User registration and login system
- Persistent user profiles with local storage
- Password-protected accounts
- User statistics and progress tracking

### 🎵 **Quiz Categories**
- **K-Pop**: Korean music, groups, and culture
- **J-Pop & Anime**: Japanese music, anime, and culture  
- **C-Pop**: Chinese and Taiwanese music
- **Asian Dramas**: K-dramas, J-dramas, C-dramas
- **Asian Cinema**: Movies from across Asia
- **Mixed Challenge**: Questions from all categories

### 🏆 **Scoring & Leaderboards**
- Real-time scoring system
- Global leaderboards with category filtering
- Personal best score tracking
- Accuracy percentage calculations
- Time-based performance metrics

### 🎖️ **Achievements System**
- Multiple achievement badges
- Progress-based unlocks
- Visual achievement display
- Gamification elements

### 📊 **Analytics & Stats**
- Detailed user profiles
- Quiz history tracking
- Performance analytics
- Rank calculations
- Average accuracy metrics

## File Structure

```
asian_entertainment_quiz_app/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # Core app functionality
├── app.js              # Quiz management methods
├── questions.js        # Questions database
└── README.md           # This file
```

## Installation & Setup

1. **Download the files** to a local directory
2. **Open index.html** in a modern web browser
3. **No server required** - runs entirely in the browser
4. **Data persistence** uses localStorage

## How to Use

### 1. **Registration/Login**
- Create a new account or login with existing credentials
- Passwords must be at least 6 characters
- User data is stored locally in your browser

### 2. **Taking Quizzes**
- Choose from 6 different categories
- Answer multiple-choice questions
- Get immediate feedback on answers
- Track your progress with the progress bar

### 3. **Viewing Results**
- See your final score and accuracy
- Compare with previous attempts
- View detailed performance metrics

### 4. **Leaderboards**
- Check global rankings
- Filter by category
- See your position among all users

### 5. **Profile Management**
- View personal statistics
- Track achievements
- Monitor progress over time

## Technical Details

### **Technologies Used**
- HTML5 for structure
- CSS3 with modern features (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome icons
- Google Fonts (Poppins)
- LocalStorage for data persistence

### **Browser Compatibility**
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Adaptive layouts

## Question Database

The app includes **95+ questions** across all categories:
- **K-Pop**: 15 questions covering groups, culture, and industry
- **J-Pop & Anime**: 10 questions about Japanese entertainment
- **C-Pop**: 10 questions about Chinese/Taiwanese music
- **Asian Dramas**: 10 questions about TV shows
- **Asian Cinema**: 10 questions about movies
- **Mixed**: Random selection from all categories

## Customization

### **Adding Questions**
Edit `questions.js` to add new questions:

```javascript
{
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 0, // Index of correct answer (0-3)
    category: "Category Name",
    points: 10
}
```

### **Styling**
Modify `styles.css` to change:
- Color schemes
- Fonts and typography
- Layout and spacing
- Animations and effects

### **Features**
Extend functionality in `script.js` and `app.js`:
- Add new quiz categories
- Implement timer functionality
- Add difficulty levels
- Create multiplayer features

## Data Storage

All user data is stored locally using browser localStorage:
- User accounts and passwords
- Quiz scores and history
- Achievement progress
- Settings and preferences

**Note**: Data is tied to the specific browser and device. Clearing browser data will reset all progress.

## Security Note

This is a client-side application for educational/entertainment purposes. In a production environment:
- Implement proper password hashing
- Use secure authentication methods
- Store data on secure servers
- Add input validation and sanitization

## Future Enhancements

Potential improvements:
- Timer-based questions
- Difficulty levels (Easy/Medium/Hard)
- Multiplayer competitions
- Social sharing features
- More question categories
- Audio/video questions
- Mobile app version
- Server-side data storage

## Support

For issues or questions:
1. Check browser console for errors
2. Ensure JavaScript is enabled
3. Try refreshing the page
4. Clear browser cache if needed

## License

This project is for educational purposes. Feel free to modify and distribute.

---

**Enjoy testing your Asian entertainment knowledge!** 🎵🎬🏆
