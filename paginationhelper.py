"""
a utility class for helping with some basic functions about a collection
"""

import math

class PaginationHelper:

    # The constructor takes in an array of items and a integer indicating
    # how many items fit within a single page
    def __init__(self, collection, items_per_page):
        self.collection = collection
        self.items_per_page = items_per_page

    # returns the number of items within the entire collection
    def item_count(collection):
        return len(collection)

    # returns the number of pages
    def page_count(collection, items_per_page):
        return math.ceil(len(collection) / items_per_page)

    # returns the number of items on the current page. page_index is zero based
    # this method should return -1 for page_index values that are out of range
    def page_item_count(self, page_index):
        if page_index > self.page_count(self.collection): 
            return -1
        elif page_index == self.page_count(self.collection):
            return self.collection % self.items_per_page
        else:
            return self.items_per_page

    # determines what page an item is on. Zero based indexes.
    # this method should return -1 for item_index values that are out of range
    def page_index(self, item_index):
        if item_index > self.item_count(self.collection): 
            return -1
        else:
            page = -1
            while item_index > 0:
                item_index -= self.items_per_page
                page += 1
            return page

print(PaginationHelper.page_count(range(1,25),10))
