import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() title: string;
  @Input() created_at: Date;
  @Input() loveIts: number;
  @Input() content: string;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
    console.log('created_at',this.created_at)
  }
  loveIt(rep,index) {
    if(rep){
      this.loveIts++
    }
    if(!rep){
      this.loveIts--
    }
    console.log('posts',this.loveIts,'\tindex',this.index)
  }

}
