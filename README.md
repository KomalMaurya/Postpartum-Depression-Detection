# 🧠 Postpartum Depression Detection using Machine Learning

This project helps in identifying signs of **postpartum depression** in new mothers by analyzing survey data through machine learning models.

🩺 **Why it matters:**  
Postpartum depression often goes undetected, especially in under-resourced settings.  
This model can assist healthcare workers or social programs in **early screening** by analyzing health and lifestyle survey responses.

---

## 📂 Dataset

- Dataset: `data/post_natal_data.csv`
- Type: Survey responses (health, mood, habits)
- Source: Kaggle (during ML internship at IGDTUW)

---

## 🚀 What this project does

1. **Cleans and preprocesses** health survey data  
2. **Analyzes patterns** using visualizations  
3. **Trains and compares models** like Logistic Regression, SVM, and Random Forest  
4. **Predicts depression risk**, helping with early detection and awareness

---

## ✅ Results

- **Random Forest** gave the best accuracy (~92%)
- Helps identify at-risk individuals based on simple survey inputs

---

## 🛠 Tech Stack

Python, Pandas, NumPy, scikit-learn, Matplotlib, Seaborn

---

## 📌 How to Run

```bash
git clone https://github.com/KomalMaurya/postpartum-depression-detection.git
cd postpartum-depression-detection
jupyter notebook Postpartum_Depression.ipynb
