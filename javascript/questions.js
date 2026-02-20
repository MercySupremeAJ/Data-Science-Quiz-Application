const questions = [
    // ==================== Data Science Fundamentals (Questions 1-15) ====================
    {
        id: 1,
        question: "What does 'Data Science' primarily involve?",
        options: [
            "Extracting insights from structured and unstructured data",
            "Building websites and mobile apps",
            "Designing computer hardware",
            "Managing corporate databases only"
        ],
        correctIndex: 0,
        timeLimit: 20,
        points: 100,
        category: "Data Science Fundamentals"
    },
    {
        id: 2,
        question: "Which Python library is most commonly used for data manipulation and analysis?",
        options: ["NumPy", "Matplotlib", "Pandas", "Scikit-learn"],
        correctIndex: 2,
        timeLimit: 20,
        points: 100,
        category: "Data Science Fundamentals"
    },
    {
        id: 3,
        question: "What is a DataFrame in Pandas?",
        options: [
            "A single column of data",
            "A 2-dimensional labeled data structure with columns of potentially different types",
            "A type of chart",
            "A machine learning model"
        ],
        correctIndex: 1,
        timeLimit: 20,
        points: 100,
        category: "Data Science Fundamentals"
    },
    {
        id: 4,
        question: "What does EDA stand for in data science?",
        options: [
            "Extensive Data Architecture",
            "Exploratory Data Analysis",
            "Enhanced Data Algorithms",
            "Electronic Data Assessment"
        ],
        correctIndex: 1,
        timeLimit: 25,
        points: 100,
        category: "Data Science Fundamentals"
    },
    {
        id: 5,
        question: "Which of the following is a supervised learning task?",
        options: [
            "Clustering",
            "Dimensionality reduction",
            "Classification",
            "Anomaly detection"
        ],
        correctIndex: 2,
        timeLimit: 25,
        points: 100,
        category: "Data Science Fundamentals"
    },
    {
        id: 6,
        question: "What is the primary purpose of data cleaning?",
        options: [
            "To visualize data",
            "To remove or correct inaccurate, incomplete, or irrelevant data",
            "To train machine learning models",
            "To export data to CSV files"
        ],
        correctIndex: 1,
        timeLimit: 20,
        points: 100,
        category: "Data Science Fundamentals"
    },
    {
        id: 7,
        question: "Which type of data visualization is best for showing the distribution of a single numerical variable?",
        options: [
            "Scatter plot",
            "Histogram",
            "Pie chart",
            "Line chart"
        ],
        correctIndex: 1,
        timeLimit: 25,
        points: 100,
        category: "Data Science Fundamentals"
    },
    {
        id: 8,
        question: "What does CSV stand for?",
        options: [
            "Computer System Values",
            "Comma Separated Values",
            "Common Statistical Variables",
            "Coded Source Vectors"
        ],
        correctIndex: 1,
        timeLimit: 20,
        points: 100,
        category: "Data Science Fundamentals"
    },
    {
        id: 9,
        question: "What is overfitting in machine learning?",
        options: [
            "When a model performs well on both training and test data",
            "When a model learns the training data too well including noise, and performs poorly on new data",
            "When a model is too simple to capture patterns",
            "When there is not enough training data"
        ],
        correctIndex: 1,
        timeLimit: 30,
        points: 100,
        category: "Data Science Fundamentals"
    },
    {
        id: 10,
        question: "Which Python library is primarily used for numerical computing and array operations?",
        options: ["Pandas", "NumPy", "Seaborn", "Flask"],
        correctIndex: 1,
        timeLimit: 20,
        points: 100,
        category: "Data Science Fundamentals"
    },
    {
        id: 11,
        question: "What is the difference between structured and unstructured data?",
        options: [
            "Structured data is larger than unstructured data",
            "Structured data is organized in rows and columns; unstructured data has no predefined format",
            "Unstructured data is always text-based",
            "There is no difference"
        ],
        correctIndex: 1,
        timeLimit: 25,
        points: 100,
        category: "Data Science Fundamentals"
    },
    {
        id: 12,
        question: "What does the term 'feature' refer to in machine learning?",
        options: [
            "A column or attribute used as input for a model",
            "The output prediction of a model",
            "A type of neural network",
            "A visualization technique"
        ],
        correctIndex: 0,
        timeLimit: 20,
        points: 100,
        category: "Data Science Fundamentals"
    },
    {
        id: 13,
        question: "Which of the following is an unsupervised learning algorithm?",
        options: [
            "Linear Regression",
            "K-Means Clustering",
            "Logistic Regression",
            "Random Forest"
        ],
        correctIndex: 1,
        timeLimit: 20,
        points: 100,
        category: "Data Science Fundamentals"
    },
    {
        id: 14,
        question: "What is a target variable (label) in supervised learning?",
        options: [
            "An input feature used for training",
            "The variable the model is trying to predict",
            "A hyperparameter of the model",
            "The learning rate of the algorithm"
        ],
        correctIndex: 1,
        timeLimit: 20,
        points: 100,
        category: "Data Science Fundamentals"
    },
    {
        id: 15,
        question: "Which Python library is commonly used for creating static, animated, and interactive visualizations?",
        options: [
            "Scikit-learn",
            "TensorFlow",
            "Matplotlib",
            "BeautifulSoup"
        ],
        correctIndex: 2,
        timeLimit: 30,
        points: 150,
        category: "Data Science Fundamentals"
    },

    // ==================== Statistics & Probability (Questions 16-30) ====================
    {
        id: 16,
        question: "What is the mean of the dataset [2, 4, 6, 8, 10]?",
        options: ["5", "6", "7", "8"],
        correctIndex: 1,
        timeLimit: 20,
        points: 100,
        category: "Statistics & Probability"
    },
    {
        id: 17,
        question: "What is the median of the dataset [3, 1, 7, 5, 9]?",
        options: ["3", "5", "7", "9"],
        correctIndex: 1,
        timeLimit: 20,
        points: 100,
        category: "Statistics & Probability"
    },
    {
        id: 18,
        question: "What does standard deviation measure?",
        options: [
            "The central value of a dataset",
            "The spread or dispersion of data points from the mean",
            "The most frequently occurring value",
            "The total sum of all values"
        ],
        correctIndex: 1,
        timeLimit: 20,
        points: 100,
        category: "Statistics & Probability"
    },
    {
        id: 19,
        question: "What is a p-value in hypothesis testing?",
        options: [
            "The probability of the hypothesis being true",
            "The probability of observing results at least as extreme as the data, assuming the null hypothesis is true",
            "The percentage of correct predictions",
            "The power of a statistical test"
        ],
        correctIndex: 1,
        timeLimit: 25,
        points: 100,
        category: "Statistics & Probability"
    },
    {
        id: 20,
        question: "What does correlation measure?",
        options: [
            "Cause and effect between variables",
            "The strength and direction of the linear relationship between two variables",
            "The average of two variables",
            "The variance of a single variable"
        ],
        correctIndex: 1,
        timeLimit: 20,
        points: 100,
        category: "Statistics & Probability"
    },
    {
        id: 21,
        question: "A correlation coefficient of -1 indicates what?",
        options: [
            "No relationship",
            "A perfect positive linear relationship",
            "A perfect negative linear relationship",
            "A weak relationship"
        ],
        correctIndex: 2,
        timeLimit: 25,
        points: 100,
        category: "Statistics & Probability"
    },
    {
        id: 22,
        question: "What is the null hypothesis (H0)?",
        options: [
            "The hypothesis that there is a significant effect",
            "The default assumption that there is no effect or no difference",
            "The alternative explanation for the data",
            "A hypothesis that is always rejected"
        ],
        correctIndex: 1,
        timeLimit: 25,
        points: 100,
        category: "Statistics & Probability"
    },
    {
        id: 23,
        question: "What type of probability distribution is the bell curve?",
        options: ["Uniform", "Binomial", "Normal (Gaussian)", "Poisson"],
        correctIndex: 2,
        timeLimit: 25,
        points: 100,
        category: "Statistics & Probability"
    },
    {
        id: 24,
        question: "What is the mode of the dataset [1, 2, 2, 3, 4, 4, 4, 5]?",
        options: ["1", "2", "3", "4"],
        correctIndex: 3,
        timeLimit: 20,
        points: 100,
        category: "Statistics & Probability"
    },
    {
        id: 25,
        question: "What does a box plot (box-and-whisker plot) display?",
        options: [
            "The frequency of each category",
            "The minimum, first quartile, median, third quartile, and maximum of a dataset",
            "The correlation between two variables",
            "The probability distribution of a variable"
        ],
        correctIndex: 1,
        timeLimit: 25,
        points: 100,
        category: "Statistics & Probability"
    },
    {
        id: 26,
        question: "What is the range of a dataset?",
        options: [
            "The average value",
            "The middle value",
            "The difference between the maximum and minimum values",
            "The sum of all values"
        ],
        correctIndex: 2,
        timeLimit: 25,
        points: 100,
        category: "Statistics & Probability"
    },
    {
        id: 27,
        question: "What is Bayes' Theorem used for?",
        options: [
            "Calculating the mean of a dataset",
            "Updating the probability of a hypothesis based on new evidence",
            "Finding the standard deviation",
            "Sorting data in ascending order"
        ],
        correctIndex: 1,
        timeLimit: 30,
        points: 150,
        category: "Statistics & Probability"
    },
    {
        id: 28,
        question: "In statistics, what is a Type I error?",
        options: [
            "Failing to reject a false null hypothesis",
            "Rejecting a true null hypothesis (false positive)",
            "Accepting the alternative hypothesis correctly",
            "Having insufficient sample size"
        ],
        correctIndex: 1,
        timeLimit: 25,
        points: 100,
        category: "Statistics & Probability"
    },
    {
        id: 29,
        question: "What is the Central Limit Theorem?",
        options: [
            "All data is normally distributed",
            "The sampling distribution of the sample mean approaches a normal distribution as sample size increases",
            "The mean is always equal to the median",
            "Larger samples are always more accurate"
        ],
        correctIndex: 1,
        timeLimit: 30,
        points: 150,
        category: "Statistics & Probability"
    },
    {
        id: 30,
        question: "What does R-squared (R²) represent in regression?",
        options: [
            "The slope of the regression line",
            "The proportion of variance in the dependent variable explained by the independent variable(s)",
            "The number of data points",
            "The correlation coefficient"
        ],
        correctIndex: 1,
        timeLimit: 30,
        points: 150,
        category: "Statistics & Probability"
    },

    // ==================== Machine Learning Basics (Questions 31-40) ====================
    {
        id: 31,
        question: "What is the purpose of splitting data into training and test sets?",
        options: [
            "To reduce the size of the dataset",
            "To evaluate how well a model generalizes to unseen data",
            "To increase model accuracy",
            "To remove outliers from the data"
        ],
        correctIndex: 1,
        timeLimit: 20,
        points: 100,
        category: "Machine Learning Basics"
    },
    {
        id: 32,
        question: "Which algorithm is commonly used for binary classification problems?",
        options: [
            "Linear Regression",
            "Logistic Regression",
            "K-Means Clustering",
            "Principal Component Analysis"
        ],
        correctIndex: 1,
        timeLimit: 25,
        points: 100,
        category: "Machine Learning Basics"
    },
    {
        id: 33,
        question: "What is a decision tree?",
        options: [
            "A database schema",
            "A model that makes decisions by splitting data based on feature conditions in a tree-like structure",
            "A type of neural network",
            "A data visualization technique"
        ],
        correctIndex: 1,
        timeLimit: 25,
        points: 100,
        category: "Machine Learning Basics"
    },
    {
        id: 34,
        question: "What does the K in K-Nearest Neighbors (KNN) represent?",
        options: [
            "The number of features in the dataset",
            "The number of nearest neighbors to consider for classification",
            "The number of clusters",
            "The kernel size"
        ],
        correctIndex: 1,
        timeLimit: 25,
        points: 100,
        category: "Machine Learning Basics"
    },
    {
        id: 35,
        question: "What is cross-validation used for?",
        options: [
            "To clean data before training",
            "To assess how a model performs on different subsets of the data",
            "To visualize model predictions",
            "To increase the size of the training set"
        ],
        correctIndex: 1,
        timeLimit: 25,
        points: 100,
        category: "Machine Learning Basics"
    },
    {
        id: 36,
        question: "Which metric is best for evaluating a classification model on imbalanced data?",
        options: [
            "Accuracy",
            "F1 Score",
            "Mean Squared Error",
            "R-squared"
        ],
        correctIndex: 1,
        timeLimit: 25,
        points: 100,
        category: "Machine Learning Basics"
    },
    {
        id: 37,
        question: "What is a Random Forest?",
        options: [
            "A single decision tree with random features",
            "An ensemble of multiple decision trees whose predictions are combined",
            "A clustering algorithm",
            "A type of neural network"
        ],
        correctIndex: 1,
        timeLimit: 20,
        points: 100,
        category: "Machine Learning Basics"
    },
    {
        id: 38,
        question: "What is a confusion matrix?",
        options: [
            "A matrix that shows the correlation between features",
            "A table that summarizes the performance of a classification model with true/false positives and negatives",
            "A matrix used in linear algebra for transformations",
            "A table of model hyperparameters"
        ],
        correctIndex: 1,
        timeLimit: 25,
        points: 100,
        category: "Machine Learning Basics"
    },
    {
        id: 39,
        question: "What is regularization in machine learning?",
        options: [
            "A technique to clean data",
            "A technique to prevent overfitting by adding a penalty to the model complexity",
            "A method to increase training speed",
            "A way to normalize input features"
        ],
        correctIndex: 1,
        timeLimit: 25,
        points: 100,
        category: "Machine Learning Basics"
    },
    {
        id: 40,
        question: "What is the bias-variance tradeoff?",
        options: [
            "High bias means the model is too complex",
            "The balance between a model's ability to fit training data (low bias) and generalize to new data (low variance)",
            "Variance is always better than bias",
            "Bias and variance are unrelated concepts"
        ],
        correctIndex: 1,
        timeLimit: 30,
        points: 150,
        category: "Machine Learning Basics"
    },

    // ==================== Data Wrangling & Python (Questions 41-45) ====================
    {
        id: 41,
        question: "Which Pandas method is used to handle missing values by removing rows?",
        options: [
            "df.remove_na()",
            "df.dropna()",
            "df.clean()",
            "df.delete_missing()"
        ],
        correctIndex: 1,
        timeLimit: 25,
        points: 150,
        category: "Data Wrangling & Python"
    },
    {
        id: 42,
        question: "What does the Pandas method df.groupby() do?",
        options: [
            "Sorts the DataFrame alphabetically",
            "Groups rows by one or more columns and allows aggregate operations on each group",
            "Filters out duplicate rows",
            "Merges two DataFrames together"
        ],
        correctIndex: 1,
        timeLimit: 30,
        points: 150,
        category: "Data Wrangling & Python"
    },
    {
        id: 43,
        question: "What is feature scaling and why is it important?",
        options: [
            "Removing unnecessary features from the dataset",
            "Transforming features to a similar range so no single feature dominates the model",
            "Adding new features to improve accuracy",
            "Encoding categorical variables as numbers"
        ],
        correctIndex: 1,
        timeLimit: 30,
        points: 150,
        category: "Data Wrangling & Python"
    },
    {
        id: 44,
        question: "Which method is used to combine two DataFrames vertically (stacking rows)?",
        options: [
            "pd.merge()",
            "pd.concat()",
            "df.join()",
            "df.append_rows()"
        ],
        correctIndex: 1,
        timeLimit: 30,
        points: 150,
        category: "Data Wrangling & Python"
    },
    {
        id: 45,
        question: "What is one-hot encoding used for?",
        options: [
            "Scaling numerical features between 0 and 1",
            "Converting categorical variables into binary (0/1) columns",
            "Reducing the number of features",
            "Handling missing data"
        ],
        correctIndex: 1,
        timeLimit: 30,
        points: 150,
        category: "Data Wrangling & Python"
    },

    // ==================== Advanced ML & Deep Learning (Questions 46-50) ====================
    {
        id: 46,
        question: "What is a neural network?",
        options: [
            "A statistical test for normality",
            "A model inspired by the human brain, consisting of layers of interconnected nodes (neurons)",
            "A type of decision tree",
            "A database management system"
        ],
        correctIndex: 1,
        timeLimit: 35,
        points: 200,
        category: "Advanced ML & Deep Learning"
    },
    {
        id: 47,
        question: "What is gradient descent?",
        options: [
            "A method for sorting data",
            "An optimization algorithm that iteratively adjusts parameters to minimize a loss function",
            "A type of data visualization",
            "A feature selection technique"
        ],
        correctIndex: 1,
        timeLimit: 35,
        points: 200,
        category: "Advanced ML & Deep Learning"
    },
    {
        id: 48,
        question: "What is the purpose of an activation function in neural networks?",
        options: [
            "To clean input data before it enters the network",
            "To introduce non-linearity so the network can learn complex patterns",
            "To reduce the number of neurons",
            "To connect the network to a database"
        ],
        correctIndex: 1,
        timeLimit: 40,
        points: 200,
        category: "Advanced ML & Deep Learning"
    },
    {
        id: 49,
        question: "What is the difference between bagging and boosting?",
        options: [
            "They are the same technique",
            "Bagging trains models in parallel on random subsets; boosting trains models sequentially, each correcting the previous one's errors",
            "Boosting is only for classification; bagging is only for regression",
            "Bagging uses neural networks; boosting uses decision trees"
        ],
        correctIndex: 1,
        timeLimit: 40,
        points: 200,
        category: "Advanced ML & Deep Learning"
    },
    {
        id: 50,
        question: "What is Principal Component Analysis (PCA)?",
        options: [
            "A supervised classification algorithm",
            "A dimensionality reduction technique that transforms data into a set of linearly uncorrelated components",
            "A method for handling missing values",
            "A deep learning framework"
        ],
        correctIndex: 1,
        timeLimit: 45,
        points: 200,
        category: "Advanced ML & Deep Learning"
    }
];
