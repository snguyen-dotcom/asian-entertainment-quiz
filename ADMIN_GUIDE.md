# 🔧 Admin System Guide

Your Asian Entertainment Quiz App now has a comprehensive admin system! Here's how to use it:

## 🔐 **How to Access Admin Panel**

### **Step 1: Find the Admin Access Button**
- Look for a **red key icon** 🔑 in the bottom-right corner of the screen
- This button is always visible to everyone

### **Step 2: Admin Login**
- Click the red key icon
- Enter the admin password: **`admin2024!`**
- Click "Login as Admin"

### **Step 3: Admin Navigation**
- Once logged in, you'll see an **"Admin"** button in the navigation bar
- Click it to access the admin panel

## 🎛️ **Admin Features**

### **📊 Dashboard Statistics**
- **Total Users**: Number of registered users
- **Total Quizzes**: All quizzes taken across all users
- **Highest Score**: Best score achieved by any user

### **🗑️ Data Management**
- **Reset All Scores**: Clears all user scores and leaderboards
- **Clear Leaderboard**: Same as reset all scores
- **Delete All Users**: ⚠️ **DANGER** - Completely wipes all user data

### **📥📤 Data Export/Import**
- **Export All Data**: Downloads a JSON backup file
- **Import Data**: Restore from a previously exported backup file

### **👥 User Management**
For each user, you can:
- **Reset Scores**: Clear individual user's scores only
- **Delete User**: Remove specific user account

## 🔒 **Security Information**

### **Default Admin Password**
- Current password: **`admin2024!`**
- **To change it**: Edit the `admin.js` file, line 6:
  ```javascript
  this.adminPassword = 'your-new-password-here';
  ```

### **Admin Access Levels**
- **Public**: Anyone can see the admin access button
- **Protected**: Password required to access admin functions
- **Local**: Admin status doesn't persist (logout required each session)

## ⚠️ **Important Warnings**

### **Destructive Actions**
These actions **CANNOT BE UNDONE**:
- ❌ Reset All Scores
- ❌ Delete All Users  
- ❌ Delete Individual Users

### **Confirmation Dialogs**
- All destructive actions require confirmation
- "Delete All Users" requires **double confirmation**
- Always read the warnings carefully

## 📋 **Common Admin Tasks**

### **Reset Tournament/Competition**
1. Login as admin
2. Click "Reset All Scores"
3. Confirm the action
4. All users keep their accounts but scores are cleared

### **Backup User Data**
1. Login as admin
2. Click "Export All Data"
3. Save the downloaded JSON file safely
4. Use this file to restore data later if needed

### **Remove Inactive Users**
1. Login as admin
2. Scroll to "User Management" section
3. Click "Delete" next to specific users
4. Confirm each deletion

### **Start Fresh**
1. Export data first (backup)
2. Click "Delete All Users"
3. Confirm twice
4. Everyone will need to register again

## 🔄 **Data Backup & Restore**

### **Automatic Backup Naming**
- Exported files are named: `quiz-data-backup-YYYY-MM-DD.json`
- Example: `quiz-data-backup-2024-10-30.json`

### **What's Included in Backups**
- All user accounts and passwords
- All quiz scores and history
- User achievements and statistics
- Registration dates and emails

### **Restore Process**
1. Click "Import Data"
2. Select your backup JSON file
3. Confirm overwrite warning
4. All current data will be replaced

## 🚀 **Deployment Notes**

### **After Adding Admin System**
1. Push changes to GitHub: `git push`
2. GitHub Pages will automatically update
3. Admin system will be live in 2-10 minutes

### **Admin URL Access**
- Your admin will be available at the same URL as your quiz
- Example: `https://snguyen-dotcom.github.io/asian-entertainment-quiz/`
- No special admin URL needed

## 🆘 **Troubleshooting**

### **Can't See Admin Button**
- Check if you're logged into the quiz app first
- Look for the red key icon in bottom-right corner
- Try refreshing the page

### **Wrong Password Error**
- Default password is: `admin2024!`
- Check for typos (case-sensitive)
- Make sure to include the exclamation mark

### **Admin Panel Not Loading**
- Clear browser cache
- Check browser console for JavaScript errors
- Ensure all files are uploaded to GitHub

### **Lost Admin Password**
- Edit the `admin.js` file on GitHub
- Change line 6: `this.adminPassword = 'new-password';`
- Commit and push the change

## 📱 **Mobile Admin Access**

The admin system works on mobile devices:
- ✅ Touch-friendly interface
- ✅ Responsive design
- ✅ All features available
- ✅ Confirmation dialogs work properly

## 🔐 **Security Best Practices**

1. **Change Default Password**: Don't use `admin2024!` in production
2. **Keep Backups**: Export data regularly
3. **Limit Admin Access**: Only give password to trusted people
4. **Monitor Usage**: Check admin actions periodically
5. **Update Regularly**: Keep the quiz app updated

---

## 🎉 **You're Now Ready!**

Your quiz app has professional-grade admin capabilities:
- ✅ Complete user management
- ✅ Score and leaderboard control  
- ✅ Data backup and restore
- ✅ Individual user actions
- ✅ Secure password protection

**Need help?** The admin interface is intuitive, but refer back to this guide for detailed instructions!
