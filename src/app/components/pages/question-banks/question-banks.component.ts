import { Component } from '@angular/core';

type QuestionStatus = 'pending' | 'submitted' | 'review' | 'skipped';

interface MCQQuestion {
  type: 'mcq';
  question: string;
  options: string[];
  answer: number;
  selected: number | null;
}

interface DragDropQuestion {
  type: 'dragdrop';
  question: string;
  tasks: { id: number; text: string }[];
  answers: { id: string; text: string }[];
  matchedAnswers: { [key: number]: string };
}

type Question = MCQQuestion | DragDropQuestion;

@Component({
  selector: 'app-question-banks',
  templateUrl: './question-banks.component.html',
  styleUrls: ['./question-banks.component.scss']
})
export class QuestionBanksComponent {
  questions: Question[] = [
    {
      type: 'mcq',
      question: 'ERP stands for?',
      options: ['Estimated Rough Planning', 'Enterprise Resource Planning', 'None of the above'],
      answer: 1,
      selected: null
    },
    {
      type: 'mcq',
      question: 'ERP stands for?',
      options: ['Estimated Rough Planning', 'Enterprise Resource Planning', 'None of the above'],
      answer: 1,
      selected: null
    },
    {
      type: 'mcq',
      question: 'ERP stands for?',
      options: ['Estimated Rough Planning', 'Enterprise Resource Planning', 'None of the above'],
      answer: 1,
      selected: null
    },
    {
      type: 'dragdrop',
      question: 'Match the tasks with the modules',
      tasks: [{ id: 1, text: 'Manage production planning' }, { id: 2, text: 'Deliver goods' }],
      answers: [{ id: 'pp', text: 'SAP PP Module' }, { id: 'sd', text: 'SAP SD Module' }],
      matchedAnswers: {}
    },
    {
      type: 'dragdrop',
      question: 'Match the tasks with the modules',
      tasks: [{ id: 1, text: 'Manage production planning' }, { id: 2, text: 'Deliver goods' }],
      answers: [{ id: 'pp', text: 'SAP PP Module' }, { id: 'sd', text: 'SAP SD Module' }],
      matchedAnswers: {}
    }
  ];

  currentQuestionIndex = 0;
  questionStatuses: QuestionStatus[] = Array(this.questions.length).fill('pending'); 


  get currentMCQ(): MCQQuestion | null {
    const question = this.questions[this.currentQuestionIndex];
    return question.type === 'mcq' ? question : null;
  }


  get currentDragDrop(): DragDropQuestion | null {
    const question = this.questions[this.currentQuestionIndex];
    return question.type === 'dragdrop' ? question : null;
  }

  selectAnswer(optionIndex: number) {
    if (this.currentMCQ) {
      this.currentMCQ.selected = optionIndex;
    }
  }

  setStatus(status: QuestionStatus) {
    this.questionStatuses[this.currentQuestionIndex] = status;
  }

  submitAndNext() {
    this.setStatus('submitted');
    this.goNext();
  }

  markForReview() {
    this.setStatus('review');
    this.goNext();
  }

  skipQuestion() {
    this.setStatus('skipped');
    this.goNext();
  }

  goNext() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  goPrevious() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  finishTest() {
    console.log('Test finished');
  }

  goToQuestion(index: number) {
    this.currentQuestionIndex = index;
  }

  onDragStart(event: DragEvent, answer: string) {
    event.dataTransfer?.setData('text', answer); 
  }

  allowDrop(event: DragEvent) {
    event.preventDefault(); 
  }

  onDrop(event: DragEvent, taskId: number) {
    event.preventDefault();
    const data = event.dataTransfer?.getData('text'); 
    if (data && this.currentDragDrop) {
      this.currentDragDrop.matchedAnswers[taskId] = data; 
    }
  }
}
